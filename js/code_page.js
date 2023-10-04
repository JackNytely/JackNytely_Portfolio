//Imports
import { Project } from "./helpers/Project.js";

//Load the Data
loadData();

/**
 * Loads the Data for the Page
 */
function loadData() {
	//
	//Get the Requested Project's Data from the Local Storage
	const Requested_Project_Data =
		JSON.parse(localStorage.getItem("Requested_Project")) || new Array();

	//Check if the Requested Project Data is Invalid
	if (!Requested_Project_Data) return;

	//Get the Requested Project
	const Requested_Project = new Project(...Requested_Project_Data);
}
