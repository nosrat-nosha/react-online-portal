import React from "react";
import AfterLogIn from "../AfterLogIn/AfterLogIn";

import Banner from "../Banner/Banner";
import MainSection from "../MainSection/MainSection";
import Menubar from "../MenuBar/Menubar";

const Home = () => {
	return (
		<div>
			<Menubar></Menubar>
			<Banner></Banner>
			<MainSection></MainSection>
		</div>
	);
};

export default Home;
