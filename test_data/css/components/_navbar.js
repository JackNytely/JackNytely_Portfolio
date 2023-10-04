export const navbarSCSS = [
	"/css/components/_navbar.scss",
	"scss",
	`
.navbar {
	background-color: #212121;

	height: 50px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	border-bottom: 1px solid #5bff9293;

	.nav_logo {
		width: 100%;
		max-height: 100%;
		padding: 10px;

		img {
			height: 100%;
		}
	}

	.nav_links {
		width: 60%;
		display: flex;
		flex-direction: row;
		justify-content: right;

		.nav_btn {
			width: 100px;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			text-decoration: none;
			font-size: 16px;
			border-left: 1px solid #5bff9293;
			color: $text-accent;
			text-align: center;
			opacity: 50%;
		}

		.nav_btn:hover,
		.nav_btn_active {
			opacity: 100%;
			font-weight: bold;
		}
	}
}
`,
];
