export const formSCSS = [
	"/css/components/_form.scss",
	"scss",
	`
form {
	display: flex;
	min-height: 100%;
	position: relative;
	flex-direction: column;
	justify-content: center;

	.form_input {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin: 15px 10px;

		label {
			width: 100%;
			font-size: 14px;
			font-family: "Segoe UI";
			font-weight: bold;
		}

		input {
			width: 50%;
			color: $text-accent;
			background-color: #00000000;
			border: 0;
			border-bottom: 1px solid $button-secondary;

			font-family: monospace;
			font-size: 14px;
		}

		input:focus {
			outline: none;
			border: 0;
			border-bottom: 1px dashed $button-secondary;
		}

		.form_button_group {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			width: 50%;

			.form_button {
				color: $button-secondary;
				opacity: 50%;
				font-size: 16px;
				font-weight: bold;
				align-items: center;
				text-align: center;
			}

			.form_button:hover {
				cursor: pointer;
			}

			.form_button_active {
				color: $text-accent;
				opacity: 100%;
				align-items: center;
				text-align: center;
			}
		}

		.form_radio_group {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			width: 50%;

			input {
				appearance: none;
				border: 1px solid #ffffff;
				width: 14px;
				height: 14px;
				border-radius: 50%;
				accent-color: #49ff62;
				cursor: pointer;
			}

			input[value="good"] {
				border-color: #49ff62;
				accent-color: #49ff62;
			}

			input[value="good"]:checked {
				background-color: #49ff62;
			}

			input[value="average"] {
				border-color: #f3ff49;
				accent-color: #f3ff49;
			}

			input[value="average"]:checked {
				background-color: #f3ff49;
			}

			input[value="bad"] {
				border-color: #ff4949;
				accent-color: #ff4949;
			}
			input[value="bad"]:checked {
				background-color: #ff4949;
			}
		}
	}
}

.animeSearchList {
	width: 100%;
	display: flex;
	flex-direction: column;
	position: absolute;
	top: 13vh;
	left: 0;
	margin: 0;
	padding: 0;
	background-color: #0000009a;
	backdrop-filter: blur(5px);
	z-index: 2;

	li {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 10vh;
		opacity: 100%;
		margin: 0px;
		border-bottom: 2px solid #49b6ff57;
		transition: opacity linear 0.2s;

		img {
			height: 100%;
			object-fit: contain;
			pointer-events: none;
			margin-right: 10px;
		}
		p {
			margin-right: 10px;
			text-align: center;
			font-size: 18px;
			font-weight: bold;
			color: #49ff61;
			pointer-events: none;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
	}
}

.animeSearchList:hover {
	li:not(:hover) {
		opacity: 20%;
		cursor: pointer;
		transition: opacity linear 0.2s;
	}
	li:hover {
		opacity: 100%;
		cursor: pointer;
		transition: opacity linear 0.2s;
	}
}

.animeSearchList:not(:has(li)) {
	display: none;
}
`,
];
