import './App.css';
import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Dashboard from './components/Dashboard';
import Repositories from './components/Repositories';
import Explore from './components/Explore';
import Settings from './components/Settings';

function App() {
  const [apiRes, setApiRes] = useState([])
  const [repoRes, setRepoRes] = useState([])

  async function fetchData() {
    const request = await axios.get("https://api.github.com/users/eddyfu45")
    const results = await request.data
    setApiRes(results)
  }

  async function fetchRepo() {
    if(apiRes.repos_url) {
      const repoRequest = await axios.get(apiRes.repos_url)
      const repoResults = await repoRequest.data
      setRepoRes(repoResults)
    }
  }

  useEffect(() => {
    fetchData()
    
  }, [])
  
  useEffect(() => {
    fetchRepo()
  }, [apiRes])
    console.log(apiRes)
    console.log(repoRes)

  return (
    <div className="App">
      <Router>
        <nav>
          <Link to='/'>Dashboard</Link>{" "}
          <Link to='/explore'>Explore</Link>{" "}
          <Link to='/repositories'>Repositories</Link>{" "}
          <Link to='/settings'>Settings</Link>{" "}
        </nav>
        <Route exact path='/'>
          <Dashboard apiRes={apiRes}/>
        </Route>
        <Route exact path='/explore'>
          <Explore apiRes={apiRes}/>
        </Route>
        <Route exact path='/repositories'>
          <Repositories apiRes={repoRes}/>
        </Route>
        <Route exact path='/settings'>
          <Settings apiRes={apiRes}/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
