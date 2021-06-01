import './App.css';
import Axios from 'axios';
import React, { useState, useEffect } from 'react'
import Settings from './components/Settings'
import Explore from './components/Explore'
import Repositories from './components/Repositories'
import Dashboard from './components/Dashboard'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function App() {

const [apiRes, setApiRes] = useState([]);
const [repos, setRepos] = useState([]);

async function fetchData(){
  const request = 
  await Axios.get('https://api.github.com/users/vinnyvilasboa')
  const results =
  await request.data
  setApiRes(results)
}

async function fetchRepos(){
  const reposReq = 
  await Axios.get('https://api.github.com/users/vinnyvilasboa/repos')
  const reposRes =
  await reposReq.data
  setRepos(reposRes)
}


useEffect (()=> {
fetchData();
}, []);

useEffect (()=> {
  fetchRepos();
  }, [apiRes]);

// console.log(apiRes);

  return (
    <div className="App">
     
      {/* <h1>Github Clone</h1> */}
      <Router>
        <nav>
          <Link to="/"><button>DashBoard</button></Link>{" "}
          <Link to="/explore"><button>Explore</button></Link>{" "}
          <Link to="/repositories"><button>Repositories</button></Link>{" "}
          <Link to="/settings"><button>Settings</button></Link>{" "}
        </nav>
        <Route exact path="/">
          <Dashboard apiRes={apiRes}/>
        </Route>
        <Route path="/explore">
          <Explore apiRes={apiRes}/>
        </Route>
        <Route path="/repositories" render={({location}) => 
        <Repositories repos={repos}/>
      }>
        </Route>
        <Route path="/settings">
          <Settings apiRes={apiRes}/>
        </Route>
      </Router>
      
    </div>
  );
}

export default App;
