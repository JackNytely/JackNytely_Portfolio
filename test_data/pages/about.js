export const aboutHTML = [
	"/pages/about.html",
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
	</head>
	<body class="about_page">
		<!--Setup the Navbar-->
		<nav class="navbar">
			<!--Setup the Navigation Logo-->
			<div class="nav_logo">
				<img src="../assets/Banner.png" alt="" />
			</div>

			<!--Setup the Navigation Links Area-->
			<div class="nav_links">
				<a class="nav_btn" href="/">Home</a>
				<a class="nav_btn nav_btn_active" href="#">About</a>
				<a class="nav_btn" href="/pages/rate.html">Rate</a>
			</div>
		</nav>

		<!--Setup the Quote-->
		<a
			href="https://sayingimages.com/wp-content/uploads/leonardo-dicaprio-cheers-awesome-meme.jpg"
			class="quote"
			>‟<span>Perfer et Consta</span>”</a
		>

		<!--Setup the About Section-->
		<div class="about_section">
			<!--Setup the About Main Text-->
			<p class="about_main_text">
				This website was made as a <span>University Project</span>. I wanted to have a Place where I
				can quickly <span>Add Anime</span> that I have Watched or want to Watch and to
				<span>Add Recommendations</span> from Friends without having to use a Text File to save the
				Recommendations. I also wanted to be able to <span>Rate the Anime</span> I have watched so
				that I can easily find Anime to Recommend to friends...
				<span>I truly hope You find this Website useful and Enjoy using it ^_^</span>
			</p>

			<!--Setup the About Secondary Text-->
			<p class="about_secondary_text">
				I will continue to <span>Improve and Maintain</span> this Website. If you want to
				<span>Suggest Features</span> or <span>Report Issues</span>, please join our
				<a href="https://discord.gg/BkBYnahqrc">Discord Server</a>
			</p>

			<!--Setup the About Support Text-->
			<p class="about_support_text">
				If you have the Ability to and Really Enjoy this Website, please consider leaving a
				<a href="https://www.paypal.com/donate/?hosted_button_id=PP67VHDWHPX5G">Donation</a>
			</p>
		</div>
	</body>
</html>
`,
];
