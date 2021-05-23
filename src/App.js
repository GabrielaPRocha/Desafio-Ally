import React,{useEffect,useState} from 'react';
import './App.css';
import {BrowserRouter,Switch,Route,NavLink} from 'react-router-dom'

import Pgprinc from './components/pages/Pgprinc/Pgprinc';
import Sobre from "./components/pages/sobre/Sobre";
import Header from "./components/header/Header";
function App(){
/*class App extends Component() {
  constructor() {
		super()
		this.state = {
			cards: [],
			cursos: [
				{name: 'data'},
				{name: 'fim'},
        {name: 'nome'},
			],
			filter: ''
		}
	}*/
  //render(){
  return (
    <div className="App">   
      <BrowserRouter>
      <Header/>
      <NavLink to="/Pgprinc" className="nav-link">Inicio</NavLink>
      <NavLink to="/Sobre" className="nav-link">Sobre</NavLink>
      <Switch>
        <Route exact path="/" component={Pgprinc}/>
        <Route path="/pgprinc" component={Pgprinc}/>
        <Route path="/sobre" component={Sobre}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
//}
}
export default App;