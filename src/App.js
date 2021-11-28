import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menubar from "./Pages/MenuBar/Menubar";
import Banner from "./Pages/Banner/Banner";
import MainSection from "./Pages/MainSection/MainSection";

function App() {
	return (
		<div className="App">
			<Menubar></Menubar>
			<Banner></Banner>
			<MainSection></MainSection>
		</div>
	);
}

export default App;
