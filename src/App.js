import React from 'react'
import './App.css';
import Following from './components/Following'
import User from './components/User'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    
    <div className="container">
      <h1>Github Clone</h1>
      {/* <Following /> */}
      <User />
      <img width="350px" height="200px" src="https://img.flaticon.com/icons/png/512/25/25231.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" alt="" />
    </div>
  );
}

export default App;
