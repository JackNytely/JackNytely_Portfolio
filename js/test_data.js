//Imports
import { Code_File } from "./helpers/Code_File.js";

//Import the Test Files
import { indexHTML } from "../test_data/index.js";
import { aboutHTML } from "../test_data/pages/about.js";
import { rateHTML } from "../test_data/pages/rate.js";
import { mainJS } from "../test_data/js/main.js";
import { rateJS } from "../test_data/js/rate.js";
import { animeJS } from "../test_data/js/helpers/anime.js";
import { modalJS } from "../test_data/js/helpers/modal.js";
import { showDataJS } from "../test_data/js/helpers/show_data.js";
import { variablesSCSS } from "../test_data/css/abstract/_variables.js";
import { addCardSCSS } from "../test_data/css/components/_add_card.js";
import { cardListSCSS } from "../test_data/css/components/_card_list.js";
import { cardSCSS } from "../test_data/css/components/_card.js";
import { formSCSS } from "../test_data/css/components/_form.js";
import { modalSCSS } from "../test_data/css/components/_modal.js";
import { navbarSCSS } from "../test_data/css/components/_navbar.js";
import { aboutPageSCSS } from "../test_data/css/pages/_about_page.js";
import { ratePageSCSS } from "../test_data/css/pages/_rate_page.js";
import { mainSCSS } from "../test_data/css/main.js";

//Add the Test Files to a Test Files Array
const testFiles = [
	indexHTML,
	aboutHTML,
	rateHTML,
	mainJS,
	rateJS,
	animeJS,
	modalJS,
	showDataJS,
	variablesSCSS,
	addCardSCSS,
	cardListSCSS,
	cardSCSS,
	formSCSS,
	modalSCSS,
	navbarSCSS,
	aboutPageSCSS,
	ratePageSCSS,
	mainSCSS,
];

//Setup the Code Files Array
const codeFiles = new Array();

//Loop through the Test Data
for (const [filePath, fileType, fileContents] of testFiles) {
	//
	//Filter the File Contents to be more Useful
	const filteredFileContents = fileContents.replaceAll("\t", "{{TAB}}");

	//Split the Filtered File Contents into a Usable Array (splitting by New Line)
	const filteredFileContentsArray = filteredFileContents.split("\n");

	//Setup the New Code File
	const newCodeFile = new Code_File(filePath, fileType, filteredFileContentsArray);

	//Add the New Code File to the Code Files Array
	codeFiles.push(newCodeFile);
}

//Export the Test Data
export default codeFiles;
