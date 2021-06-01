import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Explore from './components/Explore';
import Repositories from './components/Repositories';
import Settings from './components/Settings';



function App() {
  return (
    <Router>
    <div className="App">
      <nav>
        <Link to="/dashboard">Dashboard</Link> {' '}
        <Link to="/explore">Explore</Link>{' '}
        <Link to="/repositories">Repositories</Link>{' '}
        <Link to="/settings">Settings</Link>
      </nav>
      {/* <h1>Github Clone</h1> */}
      {/* <img width="350px" height="200px" src="https://img.flaticon.com/icons/png/512/25/25231.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" alt="" /> */}
      <Route exact path='/dashboard' component={Dashboard} />
      <Route exact path='/explore' component={Explore} />
      <Route exact path='/repositories' component={Repositories} />
      <Route exact path='/settings' component={Settings} />

    </div>
    </Router>
  );
}

export default App;
