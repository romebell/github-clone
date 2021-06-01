import { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import { Header, Footer, Dashboard, Explore, Repositories, Settings } from './components';
// import env from 'react-dotenv';
const API = 'https://api.github.com'

export const App = () => {
  const [githubUser, setGithubUser] = useState({});
  useEffect(() => {
    const apiCall = async (user = 'ga-avery') => {
      const resp = await fetch(API + `/users/${user}`, { header: { 'Accept': 'application/vnd.github.v3+json' } });
      const json = await resp.json();
      setGithubUser(json);
    }
    apiCall();
  }, [])
  return (
    <>
      <Header /> {/* We want headers and footers on every page */}
      <Router>
        <Switch>
          <Route
            exact
            path='/'
            render={() => <Dashboard {...githubUser} />}
          />
          <Route
            exact
            path='/explore'
            component={Explore}
          />
          <Route
            exact
            path='/repositories'
            component={Repositories}
          />
          <Route
            exact
            path='/settings'
            component={Settings}
          />
        </Switch>
      </Router>
      <Footer /> {/* We want headers and footers on every page */}
    </>
  );
}

export default App;
