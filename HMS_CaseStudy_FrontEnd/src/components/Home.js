import React from "react";
// importing Link from react-router-dom to navigate to
// different end points.
import { NavLink } from "react-router-dom";
import './home.css'
import Slider from "./Slider/Slider";
import about from './images/About.png'
import viewpoint from './images/viewpoint.png'
import maintenance from './images/maintenance.png'
import food from './images/food.png'
import hygiene from './images/hygiene.png'
import pricetag from './images/pricetag.png'
import award from './images/award.png'
import WWcoverage from './images/WWcoverage.png'
import logobrown from './images/logobrown.png'


const Home = () => {
return (
	<React.Fragment>	
	<div className='hotelName'><img src={logobrown} className="logobrown"/><div className="babaihotelName">BABAI Hotel</div></div>
	<nav>
	<ul className='navBar'>
		<li className='homeli'>
			{/* Endpoint to route to Home component */}
			<NavLink to="/" className='link'>Home</NavLink>
		</li>
		<li className='homeli'>
			{/* Endpoint to route to Receptionist component */}
			<NavLink to="/receptionistlogin" className='link'>Receptionist Login</NavLink>
		</li>
		<li className='homeli'>
			{/* Endpoint to route to Manager component */}
			<NavLink to="/managerlogin" className='link'>Manager Login</NavLink>
		</li>
        <li className='homeli'>
            {/* Endpoint to route to Owner component */}
		    <NavLink to="/ownerlogin" className='link'>Owner Login</NavLink>
        </li>
	</ul>
	</nav>
	<div className="slider"><Slider/></div>
	<div className="testimonialhome">
		<div className="testmonialtags"><img src={pricetag} className="testimoniallogos" /><br/><h4>Competetive Pricing</h4><p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form.</p></div>
		<div className="testmonialtags"><img src={award} className="testimoniallogos" /><br/><h4>Award winning service</h4><p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form.</p></div>
		<div className="testmonialtags"><img src={WWcoverage} className="testimoniallogos" /><br/><h4>WorldWide Coverage</h4><p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form.</p></div>
	</div>
	<div className="abouthotel">
	<h1>About</h1>
	<div className="gridabout">	
	   <div><div className="imagecenter"><img src={viewpoint} className="abouticons"/><h4>View Point</h4></div>
		<p>BABAI Hotel had started its base in vijayawada with classic look and attractive, it expanded drastically through the years and stated its stability as a grand hotel of vijayawada.</p></div>
		<div><div className="imagecenter"><img src={maintenance} className="abouticons"/><h4>Maintenance</h4></div>
		<p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p></div>
		<img src={about} className='aboutimage'></img>
		<div><div className="imagecenter"><img src={food} className="abouticons"/><h4>Food</h4></div><p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form.</p></div>
		<div><div className="imagecenter"><img src={hygiene} className="abouticons"/><h4>Hygiene</h4></div><p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form.</p></div>
	</div>
	</div>
	
	<footer id="footer">
		<div>
			<p>BABAI HOTEL</p>
		</div>
		<div>
			<p>Project Doneby: Rajesh</p>
		</div>
    </footer>
	</React.Fragment>
);
};

export default Home;