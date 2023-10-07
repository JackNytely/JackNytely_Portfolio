"use strict";

/**Imports the Test Data (This will be used later to show code natively in the website) 
import testData from "./test_data.js";
*/

//Imports
import { Project } from "./helpers/Project.js";

//Get the Required Elements
const projectListElement = document.querySelector(".project_list");

//Setup the Listeners
projectListElement.addEventListener("click", projectClickHandler);

//Setup the Project List
const projectList = new Map();

//Setup the New Project
const testProject1 = new Project(
	"My Anime List",
	"/assets/Code_Test.png",
	"/assets/Preview_Test.png",
	null,
	"https://github.com/HyperionDev-SL23060008761/MyAnimeList",
	"https://MyAnimeList.JackNytely.com"
);

//Open the Project Card in the Project List Element
testProject1.openProjectCard(projectListElement);

//Add the Project to the Project List
projectList.set(testProject1.name, testProject1);

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
