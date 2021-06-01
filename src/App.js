import './App.css';
import Dashboard from './components/Dashboard';
import Explore from './components/Explore';
import Repositories from './components/Repositories';
import Settings from './components/Settings';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

// 1. Install dependencies
// 2. Create compponents and setup 
// 3. Create Router, Route and Links line 53-79
// 4. Create and set state line: 19
// 5. Use async function to call api and get response line 22


function App() {

  const [userData, setUserData] = useState([])
  const [repoData, setRepoData] = useState([])
  const [expData, setExpData] = useState([])

  async function fetchData() {
    const urlRequest = await axios.get('https://api.github.com/users/brandonhall96');
    const urlResult = await urlRequest.data
    setUserData(urlResult)
  } 

  
  //---------------------------------------------------------------------------------
  
  let repoUrl = userData.repos_url
  
  async function fetchRepos() {
    const repoRequest = await axios.get(`${repoUrl}`)
    const repoResult = await repoRequest.data
    setRepoData(repoResult)
    
  }

  //---------------------------------------------------------------------------------

  let exploreUrl = userData.received_events_url

  async function fetchExplore() {
    const expRequest = await axios.get(`${exploreUrl}`)
    const expResult = await expRequest.data
    setExpData(expResult)

  }
  
  
  useEffect(() => {
    fetchData();
  

  }, [])  // empty array means call this once and be done

  useEffect(() => {
    fetchRepos();
  }, [userData]);


  useEffect(() => {
    fetchExplore();
  }, [userData]);



  return (

  <div className="App">
    <Router>
      <nav>
          <Link to="/">DashBoard</Link>{" "}
          <Link to="/explore">Explore</Link>{" "}
          <Link to="/repositories">Repositories</Link>{" "}
          <Link to="/settings">Settings</Link>{" "}
      </nav>
          <Route exact path = '/'>
            <Dashboard userData={userData} />
          </Route>
    
          <Route path = '/explore'>
            <Explore userData={userData} expData={expData} />
          </Route>

          <Route path = '/repositories'>
            <Repositories userData={userData} repoData={repoData} />
          </Route>

          <Route path = '/settings'>
            <Settings userData={userData} />
          </Route>




    </Router>
  </div>
 
  );
}


export default App;
