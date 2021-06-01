import './App.css';
  
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import axios from 'axios'


// %%%%%%% Components %%%%%%%
import Dashboard from './components/Dashboard'
import Explore from './components/Explore'
import Repositories from './components/Repositories'
import Settings from './components/Settings'


// const URL = 'https://api.github.com/users/mauricechevez/following'


const myProfile = {
  login: "mauricechevez",
  id: 82402602,
  node_id: "MDQ6VXNlcjgyNDAyNjAy",
  avatar_url: "https://avatars.githubusercontent.com/u/82402602?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/mauricechevez",
  html_url: "https://github.com/mauricechevez",
  followers_url: "https://api.github.com/users/mauricechevez/followers",
  following_url: "https://api.github.com/users/mauricechevez/following{/other_user}",
  gists_url: "https://api.github.com/users/mauricechevez/gists{/gist_id}",
  starred_url: "https://api.github.com/users/mauricechevez/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/mauricechevez/subscriptions",
  organizations_url: "https://api.github.com/users/mauricechevez/orgs",
  repos_url: "https://api.github.com/users/mauricechevez/repos",
  events_url: "https://api.github.com/users/mauricechevez/events{/privacy}",
  received_events_url: "https://api.github.com/users/mauricechevez/received_events",
  type: "User",
  site_admin: false,
  name: "Maurice Chevez",
  company: null,
  blog: "",
  location: "New York",
  email: null,
  hireable: null,
  bio: "Software Engineer",
  twitter_username: null,
  public_repos: 11,
  public_gists: 0,
  followers: 4,
  following: 2,
  created_at: "2021-04-12T16:46:19Z",
  updated_at: "2021-05-17T03:13:54Z"
  }


function App(props) {
   // AXIOS call


  return (
 
    <div className="App">
      <Router>
      <h1>Github Clone</h1>
      <a href="/" ><img width="150px" src="https://img.flaticon.com/icons/png/512/25/25231.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" alt="" /></a>
      <hr />
      <Route exact path='/' render={(props) =>  <Dashboard {...props}/>} />
      <Route exact path='/settings' render={(props) => <Settings myProfile={myProfile} />} />
    </Router>
    </div>
  );
}

export default App;
