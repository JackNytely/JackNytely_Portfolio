export const ratePageSCSS = [
	"/css/pages/_rate_page.scss",
	"scss",
	`
body.rate_page {
	.anime_rating_table {
		width: 100vw;
		max-height: calc(100% - 50px);
		display: flex;
		flex-direction: column;
		overflow-y: scroll;

		input {
			pointer-events: none;
			background-color: #00000000;
			border: none;
			color: #28ff70;
			text-align: center;
			width: 2ch;
			font-size: 16px;
			font-family: monospace;
		}

		td:has(input):hover {
			cursor: pointer;

			i {
				opacity: 50%;
				display: inline;
				color: #2eff74;
			}

			i:hover {
				opacity: 100%;
			}
		}

		td:has(input):hover {
			cursor: pointer;
		}

		i {
			display: none;
			color: #2eff74;
		}
	}

	tr {
		max-width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #28ff702c;
		padding: 30px 0px;

		td {
			height: 100%;
			width: 100%;
			text-align: center;
			user-select: none;
		}
	}

	tr.columns {
		width: 100%;
		position: relative;
		border-bottom: 1px solid #28ff70;
		background-color: #121212;

		td {
			font-size: 18px;
			font-weight: bold;
			color: #28ff70;
		}
	}

	td.anime_name {
		padding: 0px 5px;
		text-align: center;
		font-size: 16px;
		color: #28ff70;
		border-right: 1px solid #28ff702c;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	//Scrollbar Width
	.anime_rating_table::-webkit-scrollbar {
		width: 1px;
	}

	//Scrollbar Track
	.anime_rating_table::-webkit-scrollbar-track {
		background: #f1f1f100;
	}

	//Scrollbar Handle
	.anime_rating_table::-webkit-scrollbar-thumb {
		background: $text-accent;
	}

	//Scrollbar Hover
	.anime_rating_table::-webkit-scrollbar-thumb:hover {
		background: $button_secondary;
	}
}
`,
];
