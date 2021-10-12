import './App.css';
import React from 'react' 
import NAV from './componentes/navbar.jsx'
import Infor  from './componentes/intro.jsx'
import FAQ from './componentes/faq.jsx'
import Contact from './componentes/contact.jsx'

function App() {
  return (
	<div className = "Apprincipal">
	  <NAV></NAV>
	  <Infor></Infor>
	  <FAQ></FAQ>
	  <Contact></Contact>
	  </div>
 );
}

export default App;
