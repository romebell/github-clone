import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Dashboard from './components/Dashboard'
import Repositories from './components/Repositories'

let url = 'https://api.github.com/users/amanda-posey';


function App() {
  const [info, setInfo] = useState([]);
  
  const getInfo = () => {
    axios.get(url).then((response) => {
      setInfo(response.data)
      console.log(response.data);
    });
  };
  useEffect(() => {
    getInfo();
  }, []);

  return (
    <div>
    <Dashboard info={ info } />
    <Repositories info={ info } />
    </div>
  )

  
}

export default App;