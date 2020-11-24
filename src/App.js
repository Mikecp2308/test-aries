import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Datos from './components/Datos';
import Inicio from './components/Inicio';
import Lista from './components/Lista';
import logo from './assets/aries.jpg'


function App() {
  return (
    
    <Router> 
      <div className="container-fluid">
          <nav className="navbar navbar-light bg-light" >
            <a className="navbar-brand" href="#">
              <img src={logo} width="50" height="50" className="d-inline-block" alt="" />
              Grupo Aries
            </a>
            <Link to="/lista"  className="nav-link">Lista </Link>
          </nav>
          <div className="mt-5">
        <Switch>
        <Route path="/" exact>
            <Inicio />
          </Route>
          <Route path="/lista">
            <Lista/>
          </Route>
          <Route path="/datos/:id" >
            <Datos/>
          </Route>
        </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
