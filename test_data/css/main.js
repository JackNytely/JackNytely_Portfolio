export const mainSCSS = [
	"/css/main.scss",
	"scss",
	`
//Variables
@import "abstract/variables";

//Components
@import "components/navbar";
@import "components/card";
@import "components/add_card";
@import "components/card_list";
@import "components/modal";
@import "components/form";
@import "pages/about_page";
@import "pages/rate_page";

//Setup the Default Body Styling
body {
	display: flex;
	flex-direction: column;
	width: 100vw;
	height: 100vh;

	background-color: $background-primary;
	color: $text-primary;
	font-family: $font-primary;
	margin: 0;
}
`,
];
