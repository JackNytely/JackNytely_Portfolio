export const indexHTML = [
	"/index.html",
	"html",
	`
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>My Anime List</title>

		<!--Set the Website Icon-->
		<link rel="icon" type="image/x-icon" href="assets/favicon.ico" />

		<!--Font Awesome-->
		<link
			rel="stylesheet"
			href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
		/>

		<!--CSS-->
		<link rel="stylesheet" type="text/css" href="css/main.css" />

		<!--JS Helpers-->
		<script src="js/helpers/anime.js" defer></script>
		<script src="js/helpers/modal.js" defer></script>
		<script src="js/helpers/show_data.js" defer></script>
		<script src="js/helpers/initial_setup.js" defer></script>

		<!--JS Main-->
		<script src="js/main.js" defer></script>
	</head>
	<body>
		<!--Setup the Navbar-->
		<nav class="navbar">
			<!--Setup the Navigation Logo-->
			<div class="nav_logo">
				<img src="assets/Banner.png" alt="" />
			</div>

			<!--Setup the Navigation Links Area-->
			<div class="nav_links">
				<a class="nav_btn nav_btn_active" href="#">Home</a>
				<a class="nav_btn" href="pages/about.html">About</a>
				<a class="nav_btn" href="/pages/rate.html">Rate</a>
			</div>
		</nav>

		<!--Setup the Card List-->
		<div class="card_list">
			<!--Setup the Cards-->
			<div class="add_card">
				<!--Setup the Card Icon-->
				<i class="fa-solid fa-plus"></i>
			</div>
		</div>
	</body>
</html>

<!--T-E-M-P-L-A-T-E-S-->

<!--Setup the Card's Template-->
<template class="template_card">
	<div class="card">
		<!--Setup the Card Watched Bar-->
		<div class="watched_bar">
			<i class="fa-solid fa-eye watched_icon watched_icon_hidden"></i>
			<i class="fa-solid fa-eye-slash no_watched_icon"></i>
		</div>

		<!--Setup the Card Overlay-->
		<div class="card_overlay">
			<!--Setup the Card Image-->
			<div class="card_img">
				<img src="" />
			</div>

			<!--Setup the Card Delete button-->
			<div class="card_delete_btn">
				<i class="fa-solid fa-trash"></i>
				<h1>Delete</h1>
			</div>

			<!--Setup the Card Title Bar-->
			<div class="card_title_bar">
				<!--Setup the Title-->
				<p class="card_title"></p>
			</div>
		</div>

		<!--Setup the Card Rating Bar-->
		<div class="card_rating_bar"></div>
	</div>
</template>

<!--Setup the Modal's Template-->
<template class="template_modal">
	<!--Setup the Modal-->
	<div class="modal">
		<!--Setup the Modal's Main Window-->
		<div class="modal_window">
			<div class="modal_title">
				<h1>Modal Title</h1>
			</div>
			<div class="modal_content"></div>
			<div class="modal_buttons">
				<div class="modal_button modal_success_button">
					<h1>Continue</h1>
				</div>
				<div class="modal_button modal_info_button">
					<h1>Info</h1>
				</div>
				<div class="modal_button modal_error_button">
					<h1>Cancel</h1>
				</div>
			</div>
		</div>

		<!--Setup the Modal's Background-->
		<div class="modal_background"></div>
	</div>
</template>

<!--Setup the Add Anime Form Template-->
<template class="template_add_anime_form">
	<!--Setup the Form-->
	<form>
		<!--Setup the Anime Name input Area-->
		<div class="form_input">
			<label>Anime Name:</label>
			<input id="animeName" autocomplete="off" />
		</div>

		<!--Setup the Unordered List that will hold the search results for the Anime Name-->
		<input id="animeID" type="hidden" />
		<ul class="animeSearchList"></ul>

		<!--Setup the Anime Image URL Input-->
		<input id="animeImageURL" type="hidden" />

		<!--Setup the Anime Watched Status input Area-->
		<div class="form_input">
			<label>Already Watched:</label>

			<!--Setup a Button Group-->
			<div class="form_button_group">
				<!--This Input will hold the result of the choice-->
				<input id="watchedAnimeResult" type="hidden" value="1" />

				<!--Setup the Buttons for the User to choose from-->
				<div class="form_button form_button_active" data-value="1">Yes</div>
				<div class="form_button" data-value="0">No</div>
			</div>
		</div>

		<!--Setup the Anime Rating input Area-->
		<div class="form_input">
			<label>Rating:</label>

			<!--Setup a Radio Button Group-->
			<div class="form_radio_group">
				<!--Setup the Radio Buttons for the User to choose from-->
				<input type="radio" name="animeRating" value="good" checked />
				<input type="radio" name="animeRating" value="average" />
				<input type="radio" name="animeRating" value="bad" />
			</div>
		</div>
	</form>
</template>

<!--Setup the Show List Template-->
<template class="template_show_list">
	<li>
		<img class="show_image" />
		<p class="show_name"></p>
		<span class="spacer"></span>
	</li>
</template>
`,
];
