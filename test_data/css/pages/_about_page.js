export const aboutPageSCSS = [
	"/css/pages/_about_page.scss",
	"scss",
	`
body.about_page {
	.about_section {
		width: 70vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		align-self: center;
		text-align: center;
		color: #28ff7098;
		font-size: 24px;
		padding: 0px 20px;
		overflow-y: scroll;

		span,
		.about_support_text {
			color: #28ff70;
		}

		a {
			text-decoration: none;
			color: #ff3e3e;
			font-weight: bold;
		}
	}

	.quote {
		position: relative;
		align-self: center;
		text-decoration: none;
		margin: 0;
		opacity: 20%;
		color: #ff4a4a;
		font-size: 64px;
		transition: opacity linear 0.2s;
		cursor: pointer;
	}

	.quote:hover {
		opacity: 100%;
	}

	//Scrollbar Width
	.about_section::-webkit-scrollbar {
		width: 1px;
	}

	//Scrollbar Track
	.about_section::-webkit-scrollbar-track {
		background: #f1f1f100;
	}

	//Scrollbar Handle
	.about_section::-webkit-scrollbar-thumb {
		background: $text-accent;
	}

	//Scrollbar Hover
	.about_section::-webkit-scrollbar-thumb:hover {
		background: $button_secondary;
	}
}
`,
];
