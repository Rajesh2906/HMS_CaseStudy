import React from "react";
// importing Link from react-router-dom to navigate to
// different end points.
import { Link } from "react-router-dom";
import './home.css'
import Slider from "./Slider/Slider";

const Home = () => {
return (
	<React.Fragment>	
	<h1 className='hotelName'>BABAI Hotel</h1>
	<nav>
	<ul className='navBar'>
		<li className='homeli'>
			{/* Endpoint to route to Home component */}
			<Link to="/" className='link'>Home</Link>
		</li>
		<li className='homeli'>
			{/* Endpoint to route to Receptionist component */}
			<Link to="/receptionistlogin" className='link'>Receptionist Login</Link>
		</li>
		<li className='homeli'>
			{/* Endpoint to route to Manager component */}
			<Link to="/managerlogin" className='link'>Manager Login</Link>
		</li>
        <li className='homeli'>
            {/* Endpoint to route to Owner component */}
		    <Link to="/ownerlogin" className='link'>Owner Login</Link>
        </li>
	</ul>
	</nav>
	<div className="slider"><Slider/></div>
	<body className="about">
		<h1>About</h1>
		<div>
			BABAI Hotel had started its base in vijayawada with classic look and attractive, it expanded drastically through the years and stated its stability as a grand hotel of vijayawada.
		</div>
	</body>
	<footer id="footer">
            <div>
                <p>BABAI HOTEL</p>
            </div>
            <div>
                <p>
                    Project Doneby: Rajesh, Rohith, Subhash, Nishanth.
                </p>
            </div>
        </footer>
	</React.Fragment>
);
};

export default Home;