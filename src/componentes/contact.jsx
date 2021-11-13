import React from 'react'
import Map from '../assets/mapa.png'
import "./cont.css"

function contact() {
	return (
		<div className="Contgrid">
		<h1 id = "contacts">Contato</h1>
		<div className="secgrid" >
		<img src={Map} alt=""/>
		<ul>
			<li>contato@origamid.com</li>
			<li>+55 (21) 9999-9999</li>
			<li>Rua do Conde, nº 21</li>
			<li>Rio de Janeiro - RJ</li>
		</ul>
		</div>
		</div>
	);
}

export default contact;
