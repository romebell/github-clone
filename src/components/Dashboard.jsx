import React, { useState, useEffect } from 'react';
import './Dashboard.css'
import Repositories from './Repositories';
export const Dashboard = (props) => {
  const [repositories, setRepositories] = useState([]);
  console.log(props);
  useEffect(() => {
    const apiCall = async () => {
      const resp = await fetch('https://api.github.com/users/ga-avery/repos');
      const json = await resp.json();
      setRepositories(json);
    }
    apiCall();
  }, [])
  return (
    <div className='page'>
      <aside className='page__aside'>
        <img src={props.avatar_url ?? 'http://placekitten.com/300/300'}
          alt="Profile" />
        <p>{props.bio}</p>
        <p><a href={props.html_url}>{props.html_url}</a></p>
      </aside>
      <main className='page__main'>
        <Repositories repositories={repositories} />
      </main>
    </div>
  )
}

export default Dashboard;