import React from "react";
// importing Link from react-router-dom to navigate to
// different end points.
import { Link } from "react-router-dom";

const Home = () => {
return (
	<div>
	<h1>ABC Hotel</h1>
	<br />
	<ul>
		<li>
			{/* Endpoint to route to Home component */}
			<Link to="/">Home</Link>
		</li>
		<li>
			{/* Endpoint to route to Receptionist component */}
			<Link to="/receptionistlogin">Receptionist Login</Link>
		</li>
		<li>
			{/* Endpoint to route to Manager component */}
			<Link to="/managerlogin">Manager Login</Link>
		</li>
        <li>
            {/* Endpoint to route to Owner component */}
		    <Link to="/ownerlogin">Owner Login</Link>
        </li>
	</ul>
	</div>
);
};

export default Home;
