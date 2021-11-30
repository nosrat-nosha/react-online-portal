import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Pages/Home/Home";
import AfterLogIn from "./Pages/AfterLogIn/AfterLogIn";

function App() {
	return (
		<div className="App">
			<Router>
				<div>
					<nav className="d-none">
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/Home">Home</Link>
							</li>
							<li>
								<Link to="/AfterLogIn">AfterLogIn</Link>
							</li>
						</ul>
					</nav>

					<Route exact path="/">
						<Home></Home>
					</Route>
					<Route path="/home">
						<Home></Home>
					</Route>
					<Route exact path="/AfterLogIn">
						<AfterLogIn></AfterLogIn>
					</Route>
				</div>
			</Router>
		</div>
	);
}

export default App;
