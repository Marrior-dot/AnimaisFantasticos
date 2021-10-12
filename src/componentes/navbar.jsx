import React from 'react'
import "./nav.css"
function navbar() {
	return (
		<nav className = "Navbar">
			<ul>
				<li><a href="#Animais">ANIMAIS</a></li>
				<li><a href="#FAQ">FAQ </a></li>
				<li><a href="#contacts">CONTATO</a></li>
				<li><a href="">DEV →</a></li>
			</ul>
		</nav>
	);
}

export default navbar ;
