"use strict";

/**Imports the Test Data (This will be used later to show code natively in the website) 
import testData from "./test_data.js";
*/

//Imports
import { Project } from "./helpers/Project.js";
import { Skill } from "./helpers/Skill.js";

//Setup the Raw Projects
const rawProjects = [
	[
		"My Anime List",
		"/assets/Code_Test.png",
		"/assets/Preview_Test.png",
		null,
		"https://github.com/HyperionDev-SL23060008761/MyAnimeList",
		"https://MyAnimeList.JackNytely.com",
	],
];

//Setup the Raw Skills
const rawSkills = [
	["NodeJS", 5, "/assets/skills/NodeJS.png"],
	["TypeScript", 5, "/assets/skills/TypeScript.png"],
	["JavaScript", 5, "/assets/skills/JavaScript.png"],
	["HTML", 4, "/assets/skills/HTML.png"],
	["CSS", 4, "/assets/skills/CSS.png"],
	["SCSS", 3, "/assets/skills/SCSS.png"],
	["MySQL", 3, "/assets/skills/MySQL.png"],
	["MongoDB", 3, "/assets/skills/MongoDB.png"],
];

//Get the Required Elements
const projectListElement = document.querySelector(".project_list");
const skillsElement = document.querySelector(".skills");

//Setup the Listeners
projectListElement.addEventListener("click", projectClickHandler);

//Setup the Project List
const projectList = new Map();

//Setup the Skill List
const skillList = new Map();

//Loop through the list of Raw Projects
for (const projectData of rawProjects) {
	//
	//Setup the New Project
	const newProject = new Project(...projectData);

	//Open the New project in the Project List Element
	newProject.openProjectCard(projectListElement);

	//Add the Project to the Project List
	projectList.set(newProject.name, newProject);
}

//Loop through the list of Raw Skills
for (const [skillName, skillProficiency, skillImageURL] of rawSkills) {
	//
	//Setup the New Skill
	const newSkill = new Skill(skillName, skillProficiency, skillImageURL);

	//Open the New Skill in the Skill List Element
	newSkill.openSkillCard(skillsElement);

	//Add the Skill to the Skill List
	skillList.set(newSkill.name, newSkill);
}

/**
 * Handles Click Events for a Project
 * @param {PointerEvent} clickEvent
 */
function projectClickHandler(clickEvent) {
	//
	//Get the Target Element
	const targetElement = clickEvent.target.closest(".preview_card, .code_card");

	//Check if the Target Element is not Valid
	if (!targetElement) return;

	//Get the Target Project Element
	const targetProjectElement = targetElement.closest(".project_card");

	//Check if the Target Project Element is Invalid
	if (!targetProjectElement) return;

	//Get the Requested Project
	const requestedProject = projectList.get(targetProjectElement.dataset.id);

	//Check if the Requested Project is not Valid
	if (!requestedProject) return;

	//Setup the Variable to Check if the Target Card is a "Preview Card"
	const isPreviewCard = targetElement.classList.contains("preview_card");

	//Setup the Variable to Check if the Target Card is a "Code Card"
	const isCodeCard = targetElement.classList.contains("code_card");

	//Check if the Selected Element is not Valid (Neither a Code Card nor Preview Card)
	if (!isPreviewCard && !isCodeCard) return;

	//Check if the User Clicked on the Preview Card (Ensuring the Project's Preview URL is Valid)
	if (isPreviewCard && requestedProject.previewURL) location.href = requestedProject.previewURL;

	//Check if the User Clicked on the Code Card
	if (isCodeCard && requestedProject.codeURL) location.href = requestedProject.codeURL;

	/* This will be added Later to have native ability to view code on the website itself
	if (isCodeCard) sendToCodePage(requestedProject);
	*/
}

/**
 * Sends a User to the Code Page with the Requested Project
 * @param {Project} requestedProject The Project to Send to the Code Page
 */
function sendToCodePage(requestedProject) {
	//
	//Get the Requested Project's Data
	const requestedProjectData = requestedProject.getProjectData();

	//Save the Requested Project to the Local Storage
	localStorage.setItem("Requested_Project", JSON.stringify(requestedProjectData));

	//Send the User to the Code Page
	location.href = "/pages/code.html";
}
