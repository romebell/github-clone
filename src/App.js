import './App.css';
import axios from 'axios';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import React, { useEffect, useState } from "react";
import Dashboard from './components/Dashboard';
import Explore from './components/Explore';
import Repositories from './components/Repositories';
import Settings from './components/Settings';



function App() {
  const [data, setData] = useState({ hits: [] });
 
  useEffect(async () => {
    const result = await axios(
      'https://api.github.com/users/behemoth0132',
    );
 
    setData(result.data);
    console.log(data)
    
  });
  return (

    <div className="App">
            <Router>
      <div>
      <nav>
      <Link to="/">Go to Home Page</Link>{' '}
      <Link to="/dashboard">See Our Procedures</Link>{' '}
      <Link to="/explore">Contact Us!</Link>{' '}
      <Link to="/repositories">Contact Us!</Link>{' '}
      <Link to="/settings">Contact Us!</Link>
</nav>
          <Route exact path="/" component={Dashboard} />
          <Route path="/explore" component={Explore} />
          <Route path="/repositories" component={Repositories} />
          <Route path="/settings" component={Settings} />

      </div>
      </Router>
      <h1>Github Clone</h1>
      <img width="350px" height="200px" src="https://img.flaticon.com/icons/png/512/25/25231.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" alt="" />
    </div>
  );
}

export default App;
