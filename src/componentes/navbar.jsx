import React,{useState} from 'react'
import "./nav.css"

function Navbar() {
	const [mode, setMode] = useState(false);
	const ShowH = () => {
		setMode(true)
	}
	return (
		<nav className = "Navbar">
		<div className = {mode ? "icon iconShow":"icon"} Onclick = {ShowH}>
		<div className = "menuH"></div>
		</div>
		<div className = {mode ? "menu OpenMenu":"menu CloseMenu"}> 
			<ul>
				<li><a href="#Animais">ANIMAIS</a></li>
				<li><a href="#FAQ">FAQ</a></li>
				<li><a href="#contacts">CONTATO</a></li>
				<li><a href="">DEV →</a></li>
			</ul>
		</div>
		</nav>
	);
}

export default Navbar ;
