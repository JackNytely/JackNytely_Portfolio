"use strict";

//Setup the Code File Class
export class Code_File {
	//
	//Setup the Public Properties
	filePath;
	extension;
	codeLines = new Array();

	/**
	 * Constructor
	 * @param {string} filePath The Full Path of the File (eg: /js/helpers/test.js)
	 * @param {"js" | "ts" | "html" | "css" | "scss"} extension The file's Extension (example: index.{html})
	 * @param {Array<string>} codeLines An array containing the code line by line
	 */
	constructor(filePath, extension, codeLines) {
		//
		//Update the Public Properties
		this.filePath = filePath;
		this.extension = extension;
		this.codeLines = codeLines;
	}
}
