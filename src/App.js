import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

import React, {Component, useState} from 'react';
import axios from 'axios';

import './App.css';
import Dashboard from './components/Dashboard';
import Explore from './components/Explore';
import Repositories from './components/Repositories';
import Settings from './components/Settings';


function App() {

  return (
    <Router>
      <nav>
        <Link to='/Dashboard'>Dashboard</Link>{' '}
        <Link to='/Explore'>Explore</Link>{' '}
        <Link to='/Repositories'>Repositories</Link>{' '}
        <Link to='/Settings'>Settings</Link>{' '}

      </nav>

     <div className="App">
     <h1>Github Clone</h1>
     <img width="350px" height="200px" src="https://img.flaticon.com/icons/png/512/25/25231.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" alt="" />
     </div>
     <Route exact path='/Dashboard' component={Dashboard} />
     <Route exact path='/Explore' component={Explore} />
     <Route exact path='/Repositories' component={Repositories} />
     <Route exact path='/Settings' component={Settings} />




    </Router>

  );
}

export default App;