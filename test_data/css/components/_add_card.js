export const addCardSCSS = [
	"/css/components/_add_card.scss",
	"scss",
	`
.add_card {
	@extend .card;

	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px dashed $text-accent;

	i {
		font-size: 40px;
		color: $text-accent;
		transition: font-size linear 0.1s;
	}
}

.add_card:hover {
	i {
		font-size: 52px;
		transition: font-size linear 0.1s;
	}
}
`,
];
