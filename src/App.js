import './App.css';
import Explore from './components/Explore';
import Navbar from './components/Navbar'
import UserInfo from './components/UserInfo'
import Dashboard from './components/Dashboard'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Repositories from './components/Repositories';







function App() {
  return (
    <Router>
         <Route path="/navbar" component={Navbar} />
          <Route path="/userinfo" component={UserInfo} />
        
          <Route path="/repositories" component={Repositories} />

  






       <div className="App">
      {/* <h1>Github Clone</h1>
      <img width="350px" height="200px" src="https://img.flaticon.com/icons/png/512/25/25231.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" alt="" /> */}
      <Navbar />
      <userInfo />
    </div>

    </Router>
   
  );
}

export default App;
