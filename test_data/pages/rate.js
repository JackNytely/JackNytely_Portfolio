export const rateHTML = [
	"/pages/rate.html",
	"html",
	`
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>My Anime List</title>

		<!--Set the Website Icon-->
		<link rel="icon" type="image/x-icon" href="../assets/favicon.ico" />

		<!--Font Awesome-->
		<link
			rel="stylesheet"
			href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
		/>

		<!--CSS-->
		<link rel="stylesheet" type="text/css" href="../css/main.css" />

		<!--JS Helpers-->
		<script src="../js/helpers/anime.js" defer></script>

		<!--JS Main-->
		<script src="../js/rate.js" defer></script>
	</head>
	<body class="rate_page">
		<!--Setup the Navbar-->
		<nav class="navbar">
			<!--Setup the Navigation Logo-->
			<div class="nav_logo">
				<img src="../assets/Banner.png" alt="" />
			</div>

			<!--Setup the Navigation Links Area-->
			<div class="nav_links">
				<a class="nav_btn" href="/">Home</a>
				<a class="nav_btn" href="/pages/about.html">About</a>
				<a class="nav_btn nav_btn_active" href="#">Rate</a>
			</div>
		</nav>

		<!--Setup the Table for Rating the Anime-->
		<table class="anime_rating_table">
			<tr class="columns">
				<td>Anime Name</td>
				<td>Enjoyment</td>
				<td>Characters</td>
				<td>Music</td>
				<td>Visuals</td>
				<td>Atmosphere</td>
				<td>Story</td>
				<td>Others</td>
			</tr>
		</table>
	</body>
</html>

<!--Setup the Anime Table Item Element-->
<template class="template_table_item">
	<tr>
		<td class="anime_name"></td>
	</tr>
</template>

<!--Setup the Anime Rating Value Template-->
<template class="template_rating_value">
	<td class="rating_value">
		<i class="fa-solid fa-angle-down decrease_rating_button"></i>
		<input data-type="enjoyment" value="0" />
		<i class="fa-solid fa-angle-up increase_rating_button"></i>
	</td>
</template>
`,
];
