import './App.css';
import React, {useEffect, useState} from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from 'axios'
import Dashboard from './components/Dashboard'
import Explore from './components/Explore'
import Repositories from './components/Repositories'
import Settings from './components/Settings'





function App() {
  let url = 'https://api.github.com/users/anthonymang'
  const [userinfo, setUserinfo] = useState({})
  const [dashevents, setDashevents] = useState([])
  const [repos, setRepos] = useState([])

  async function userRequest() {
    let gitUser = await axios.get(url)
    setUserinfo(gitUser.data)
    console.log(gitUser.data)
  }

  async function dashRequest() {
    let dashReq = await axios.get("https://api.github.com/users/anthonymang/received_events")
    let dash = dashReq.data
    setDashevents(dash)
  }

  async function repoRequest() {
    let repoReq = await axios.get('https://api.github.com/users/anthonymang/repos')
    let repo = repoReq.data
    setRepos(repo)
  }

  useEffect(() =>{
    userRequest()
  }, [])

  useEffect(()=>{
    dashRequest()
    repoRequest()
  }, [userinfo])


  return (
    <div className="App">
      <Router>
      <nav>
      <Link to = '/'>Dashboard</Link>{' '}
      <Link to = '/explore'>Explore</Link>{' '}
      <Link to = '/settings'>Settings</Link>{' '}
      <Link to = '/repositories'>Repositories</Link>
      </nav>
      <Route exact path = '/'><Dashboard user={userinfo} repos={repos} dash={dashevents} />
      </Route>
      <Route path = '/explore'>
        <Explore userinfo={userinfo} />
      </Route>
      <Route path = '/settings'>
        <Settings userinfo={userinfo}/>
      </Route>
      <Route path = '/repositories'>
        <Repositories userinfo={userinfo}/>
      </Route>

      </Router>
    </div>
  );
}

export default App;
