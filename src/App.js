import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';
import axios from 'axios'

import Dashboard from './components/Dashboard'
import Explore from './components/Explore'
import Repositories from './components/Repositories'
import Settings from './components/Settings'
import Home from './components/Home'

let url = 'https://api.github.com/users/charlenebatiste';

function App() {
  const [info, setInfo] = useState([]);
  // initial data

  const getInfo = () => {
    axios.get(url).then((response) => {
      console.log(response.data);
      setInfo(response.data)
    });
  };

  useEffect(() => {
    getInfo();
  }, []);
  // [] fetches data one time and stops

  return (
    <div className="App">
      <h1>Github Clone</h1>
      <img width="45px" height="30px" src="https://img.flaticon.com/icons/png/512/25/25231.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" alt="" />


      <Router>
        <div>
          <nav>
            {/* <Link to="/">Home</Link>{' '} */}
            <Link to="/dashboard">Dashboard</Link>{' '}
            <Link to="/explore">Explore</Link>{' '}
            <Link to="/repositories">Repos</Link>{' '}
            <Link to="/settings">Settings</Link>
          </nav>
          {/* <Route exact path="/" render={() => <Home info={info} />} /> */}
          <Route path="/dashboard" render={() => <Dashboard info={info} />} />
          <Route path="/explore" render={() => <Explore info={info} />} />
          <Route path="/repositories" render={() => <Repositories info={info} />} />
          <Route path="/settings" render={() => <Settings info={info} />} />
        </div>
      </Router>
    </div>
  );
}

export default App;
