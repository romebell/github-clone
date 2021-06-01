import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Explore from "./components/Explore";
import Repositories from "./components/Repositories";
import Settings from "./components/Settings";

function App() {

  const [apiRes, setApiRes] = useState([])
  const [repos, setRepos] = useState([])

  async function fetchData(){
    const request = await axios.get('https://api.github.com/users/jakeschultz89')
    const results = await request.data
    setApiRes(results)
  } 

  let repoURL = apiRes.repos_url
  
  async function fetchRepos(){
    const request = await axios.get(`${repoURL}`);
    const results = await request.data;
    setRepos(results)
  } 

  useEffect(() => {
    fetchData()
  },[])

  useEffect(() => {
    fetchRepos()
  }, [apiRes]);

  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">Dashboard</Link>{" "}
          <Link to="/explore">Explore</Link>{" "}
          <Link to="/repositories">Repositories</Link>{" "}
          <Link to="/settings">Settings</Link>{" "}
        </nav>
        <Route exact path="/">
          <Dashboard apiRes={apiRes}/>
        </Route>
        <Route path="/explore">
          <Explore apiRes={apiRes}/>
        </Route>
        <Route path="/repositories">
          <Repositories apiRes={apiRes} repos={repos}/>
        </Route>
        <Route path="/settings">
          <Settings apiRes={apiRes}/>
        </Route>
      </Router>
    </div>
  );
}
export default App;