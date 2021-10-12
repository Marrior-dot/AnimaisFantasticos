import React from 'react'
import Map from '../assets/mapa.png'

function contact() {
	return (
		<div>
		<h1 id = "contacts">Contatos</h1>
		<img src={Map} alt=""/>
		<ul>
			<li>contato@origamid.com</li>
			<li>+55 (21) 9999-9999</li>
			<li>Rua do Conde, nº 21</li>
			<li>Rio de Janeiro - RJ</li>
		</ul>
		</div>
	);
}

export default contact;
