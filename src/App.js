import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Repositories from "./components/Repositories";
import Explore from "./components/Explore";
import Settings from "./components/Settings";

function App() {
  const [github, setGithub] = useState({});

  useEffect(() => {
    axios.get("https://api.github.com/users/aprin418").then((response) => {
      let data = response.data;
      console.log(data);
      setGithub(data);
    });
  }, []);

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <img
                width="75"
                height="auto"
                src="https://img.flaticon.com/icons/png/512/25/25231.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF"
                alt=""
              />
            </li>
            <li>
              <form>
                <input placeholder="Search or jump to..."></input>
              </form>
            </li>
            <li>
              <a href="/auth/login">Pull requests</a>
            </li>

            <li>
              <a href="/auth/logout">Issues</a>
            </li>
            <li>
              <a href="/profile">Marketplace</a>
            </li>
            <li>
              <a href="/faves">Explore</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              path="/explore"
              render={(props) => <Explore {...props} github={github} />}
            />
            <Route
              path="/settings"
              render={(props) => <Settings {...props} github={github} />}
            />
            <Route
              path="/repo"
              render={(props) => <Repositories {...props} github={github} />}
            />
            <Route
              path="/"
              render={(props) => <Dashboard {...props} github={github} />}
            />
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
