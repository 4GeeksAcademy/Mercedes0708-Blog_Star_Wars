import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop.jsx";

import { Home } from "./views/home.js";
import { Demo } from "./views/demo.js";
import { Single } from "./views/single.js";
import { Characters } from "./views/characters.jsx";
import { Planets } from "./views/planets.jsx";
import { Starships } from "./views/starships.jsx";
import injectContext from "./store/appContext.js";

import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";
import { DetailsCharacters } from "./views/detailscharacters.jsx";
import { DetailsPlanets } from "./views/detailsplanets.jsx";
import { DetailsStarships } from "./views/detailsstarships.jsx";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="/characters" element={<Characters />} />
						<Route path="/planets" element={<Planets />} />
						<Route path="/starships" element={<Starships />} />
						<Route path="/detailscharacters/" element={<DetailsCharacters />} />
						<Route path="/detailsplanets/" element={<DetailsPlanets />} />
						<Route path="/detailsstarships/" element={<DetailsStarships />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
