export const cardSCSS = [
	"/css/components/_card.scss",
	"scss",
	`
.card {
	display: flex;
	position: relative;
	width: 200px;
	height: 300px;
	border-radius: 5px 5px 0px 0px;
	border: 0px solid;
	margin-bottom: 30px;
	margin-left: 15px;
	margin-right: 15px;
	overflow: hidden;
	cursor: pointer;

	.watched_bar {
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		width: 20px;
		height: 20px;
		border-radius: 0px 0px 10px 0px;
		background-color: $background-primary;
		padding: 2px;
		top: 0px;
		left: 0px;
		z-index: 2;
		font-size: 14px;
		pointer-events: none;

		.watched_icon {
			color: #28ff70;
		}

		.no_watched_icon {
			color: #ff543d;
		}
	}

	.watched_icon_hidden {
		display: none;
	}

	.card_overlay {
		.card_img {
			position: absolute;
			width: 100%;
			height: 100%;
			z-index: 1;

			img {
				min-height: 100%;
				max-height: 100%;
				border-radius: 5px 5px 0px 0px;
				object-fit: fill;
			}
		}

		.card_delete_btn {
			background-color: #ff3636;
			width: 30%;
			height: fit-content;
			position: absolute;
			right: -23%;
			top: 0px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			z-index: 2;
			color: #fff;
			padding: 5px 6px;
			border-radius: 0px 3px 0px 5px;
			opacity: 0%;
			transition: right linear 0.1s;

			h1 {
				margin: 0;
				font-size: 10px;
			}
		}

		.card_delete_btn:hover {
			cursor: pointer;
			background-color: #961414;
			right: 0%;
			transition: right linear 0.1s;
		}

		.card_title_bar {
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: #00000083;
			width: 100%;
			height: 0px;
			position: absolute;
			bottom: 0px;
			opacity: 0%;
			z-index: 2;
			border-top: 1px solid #5bff9293;
			transition: height linear 0.1s, opacity linear 0.2s;
			overflow: hidden;

			.card_title {
				font-size: 130%;
				font-family: $font-accents;
				margin: 0;
				margin-left: 10px;
				margin-right: 10px;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
		}
	}

	.card_overlay:hover {
		overflow: hidden;
		.card_img {
			opacity: 50%;
		}

		.card_delete_btn {
			opacity: 100%;
		}

		.card_title_bar {
			backdrop-filter: blur(5px);
			opacity: 100%;
			height: 40px;
			transition: height linear 0.1s;
		}
	}
}

.card_rating_bar {
	width: 100%;
	height: 3px;
	z-index: 2;
	position: absolute;
	bottom: 0px;

	border-top: 1px solid #000000c2;
}

.card_rating_good {
	border-color: #49ff62;

	.card_rating_bar {
		background-color: #49ff62;
	}
}

.card_rating_average {
	border-color: #f3ff49;

	.card_rating_bar {
		background-color: #f3ff49;
	}
}

.card_rating_bad {
	border-color: #ff4949;

	.card_rating_bar {
		background-color: #ff4949;
	}
}
`,
];
