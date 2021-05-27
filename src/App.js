import React from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import PhoneDetailPage from "./pages/PhoneDetailPage";
import PhonesListPage from "./pages/PhonesListPage";
import NavBar from "./components/NavBar";

function App() {
	
  return (
		<div className="App">
    <NavBar></NavBar>    
			<Switch>
				<Route exact path="/" component={PhonesListPage} />
				<Route exact path="/:id" component={PhoneDetailPage} />
			</Switch>
		</div>
	);
}

export default App;
