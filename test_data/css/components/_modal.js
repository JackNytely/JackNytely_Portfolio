export const modalSCSS = [
	"/css/components/_modal.scss",
	"scss",
	`
.modal {
	width: 100vw;
	height: 100vh;
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 10;

	.modal_window {
		width: 40vw;
		height: 50vh;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		z-index: 1;
		background-color: #212121;
		border: 1px solid #ffffff0a;

		.modal_title {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 20%;
			margin: 0;
			overflow: hidden;
			background-color: #161616;
			border-bottom: 1px solid #39883294;

			h1 {
				font-size: 3vh;
				text-shadow: #000000a9 -3px 3px;
			}
		}

		.modal_content {
			width: 100%;
			height: 100%;
			overflow-y: scroll;
		}

		.modal_buttons {
			width: 100%;
			height: 20%;
			display: flex;
			flex-direction: row-reverse;
			justify-content: space-between;
			align-items: center;
			background-color: #161616;
			border-top: 1px solid #39883294;

			.modal_button {
				height: 100%;
				width: 20%;
				display: flex;
				justify-content: center;
				align-items: center;
				opacity: 80%;
				cursor: pointer;

				h1 {
					margin: 0;
					font-size: 80%;
					font-family: $font-accents;
					text-shadow: #000000a9 -1px 1px;
				}
			}

			.modal_button:hover {
				opacity: 100%;
			}

			.modal_success_button {
				background-color: #00a738;
			}

			.modal_info_button {
				background-color: #4053ff;
			}

			.modal_error_button {
				background-color: #ff3838;
			}
		}
	}

	.modal_background {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background-color: #000000a8;
		backdrop-filter: blur(5px);
	}
}

//Scrollbar Width
.modal_content::-webkit-scrollbar {
	width: 1px;
}

//Scrollbar Track
.modal_content::-webkit-scrollbar-track {
	background: #f1f1f100;
}

//Scrollbar Handle
.modal_content::-webkit-scrollbar-thumb {
	background: $text-accent;
}

//Scrollbar Hover
.modal_content::-webkit-scrollbar-thumb:hover {
	background: $button_secondary;
}
`,
];
