import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
	return (
		<nav>
			<div id="links">
				<Link to="/">Back to Phones List</Link>
			</div>
		</nav>
	);
}
