export const cardListSCSS = [
	"/css/components/_card_list.scss",
	"scss",
	`
.card_list {
	display: flex;
	justify-content: center;
	flex-direction: row;
	flex-wrap: wrap;
	overflow-x: hidden;
	overflow-y: scroll;
	width: 100%;
	height: 100%;
	padding-top: 30px;
}

//Scrollbar Width
.card_list::-webkit-scrollbar {
	width: 1px;
}

//Scrollbar Track
.card_list::-webkit-scrollbar-track {
	background: #f1f1f100;
}

//Scrollbar Handle
.card_list::-webkit-scrollbar-thumb {
	background: $text-accent;
}

//Scrollbar Hover
.card_list::-webkit-scrollbar-thumb:hover {
	background: $button_secondary;
}
`,
];
