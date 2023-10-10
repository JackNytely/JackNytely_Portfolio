"use strict";

//Setup the Skill Class
export class Skill {
	//
	//Setup the public Properties
	name;
	proficiency;
	imageURL;

	/**
	 * Constructor
	 * @param {string} name The Name of the Skill
	 * @param {1 | 2 | 3 | 4 | 5} proficiency Your proficiency in the skill (between 1 (worse) and 5 (best))
	 * @param {string} imageURL The URL to an Image of the skill
	 */
	constructor(name, proficiency, imageURL) {
		//
		//Update the Public Properties
		this.name = name;
		this.proficiency = proficiency;
		this.imageURL = imageURL;
	}

	/**
	 * Opens the Skill Card in the Selected Element
	 * @param {Node} parentElement The Element where the Card will be Opened in
	 * @returns {void}
	 */
	openSkillCard(parentElement) {
		//
		//Check if the Parent Element is Invalid
		if (!parentElement) return;

		//Get the Current Card's Data
		const cardNodeData = this.#nodeData();

		//Add the Card to the Parent Element
		return parentElement.append(cardNodeData);
	}

	/**
	 * Returns the Raw Data for the Skill
	 * @returns {Array<any>}
	 */
	getSkillData() {
		//
		//Setup the Requested Data
		const Requested_Data = Object.values(this);

		//Return the Requested
		return Requested_Data;
	}

	/**
	 * Gets the Node/Element Data for this Skill Card
	 * @returns {Node}
	 */
	#nodeData() {
		//
		//Get the Template Skill Card
		const templateSkillCard = document.body.querySelector(".template_skill_card");

		//Setup the New Skill Card
		const newSkillCard = templateSkillCard.content.children[0].cloneNode(true);

		//Get the Skill Proficiency List
		const newSkillProficiencyList = newSkillCard.querySelector(".skill_proficiency_section");

		//Get the Skill Proficiency Elements In Reverse Order (This should always have 5 Elements inside of it)
		const skillProficiencyElements = Array.from(newSkillProficiencyList.children).reverse();

		//Get the New Skill Card's Image
		const newSkillCardImage = newSkillCard.querySelector(".skill_image");

		//Loop through the Skill Proficiency Elements
		for (const skillProficiencyElement of skillProficiencyElements) {
			//
			//Check if the Current Skill Proficiency Element should be Removed
			if (this.proficiency < skillProficiencyElements.length) skillProficiencyElements.shift();
		}

		//Renove the Existing Elements from the Proficiency List
		newSkillProficiencyList.innerHTML = null;

		//Update the Proficiency List
		newSkillProficiencyList.append(...skillProficiencyElements);

		//Update the New Skill Card's Code Image
		newSkillCardImage.src = this.imageURL;

		//Return the New Skill Card
		return newSkillCard;
	}
}
