"use strict";

//Imports
import { Code_File } from "./Code_File.js";

//Setup the Project Class
export class Project {
	//
	//Setup the public Properties
	name;
	codeImageURL;
	previewImageURL;
	sourceCode = new Map();
	codeURL;
	previewURL;

	/**
	 * Constructor
	 * @param {string} name The Name of the Project
	 * @param {string} codeImageURL The URL to a Preview Image of the Project's Code
	 * @param {string} previewImageURL The URL to a Preview Image of the Live Project (such as it's webpage)
	 * @param {Array<Code_File>} sourceCode An Array of Source Code for the Project (as a Code_File type)
	 * @param {string} codeURL The URL to a Website where the Code can be Viewed (eg: github)
	 * @param {string} previewURL The URL to a Website where the Functional Project can be showcased
	 */
	constructor(name, codeImageURL, previewImageURL, sourceCode, codeURL, previewURL) {
		//
		//Update the Public Properties
		this.name = name;
		this.codeImageURL = codeImageURL;
		this.previewImageURL = previewImageURL;
		this.sourceCode = sourceCode;
		this.codeURL = codeURL;
		this.previewURL = previewURL;
	}

	/**
	 * Opens the Project Card in the Selected Element
	 * @param {Node} parentElement The Element where the Card will be Opened in
	 * @returns {void}
	 */
	openProjectCard(parentElement) {
		//
		//Check if the Parent Element is Invalid
		if (!parentElement) return;

		//Get the Current Card's Data
		const cardNodeData = this.#nodeData();

		//Add the Card to the Parent Element
		return parentElement.append(cardNodeData);
	}

	/**
	 * Returns the Raw Data for the Project
	 * @returns {Array<any>}
	 */
	getProjectData() {
		//
		//Setup the Requested Data
		const Requested_Data = Object.values(this);

		//Return the Requested
		return Requested_Data;
	}

	/**
	 * Gets the Node/Element Data for this Project Card
	 * @returns {Node}
	 */
	#nodeData() {
		//
		//Get the Template Project Card
		const templateProjectCard = document.body.querySelector(".template_project_card");

		//Setup the New Project Card
		const newProjectCard = templateProjectCard.content.children[0].cloneNode(true);

		//Get the New Project Card's Name
		const newProjectCardName = newProjectCard.querySelector(".project_name");

		//Get the New Project Card's Code Card Image
		const newProjectCardCodeImage = newProjectCard.querySelector(
			".code_card .background_image img"
		);

		//Get the New Project Card's Preview Card Image
		const newProjectCardPreviewImage = newProjectCard.querySelector(
			".preview_card .background_image img"
		);

		//Update the New Project Card's Data
		newProjectCard.dataset.id = this.name;

		//Update the Project Card's Name
		newProjectCardName.innerText = this.name;

		//Update the New Project Card's Code Image
		newProjectCardCodeImage.src = this.codeImageURL;

		//Update the New Project Card's Preview Image
		newProjectCardPreviewImage.src = this.previewImageURL;

		//Return the New Project Card
		return newProjectCard;
	}
}
