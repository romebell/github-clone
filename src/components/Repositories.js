import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Repositories = (props) => {

    const [apiResults, setApiResults] = useState([])
    let url = props.apiRes.repos_url

    async function fetchData() {
        const request = await axios.get(`${url}`);
        const results = await request.data;
        setApiResults(results)
      }
    
      useEffect(() => {
        fetchData();
      }, []);

    console.log(apiResults)

    const repoList = apiResults.map((item,idx) => {
        return <li key={idx}>{item.name}</li>
    })

    return (
        <div>
            <h1>Repositories</h1>
            <ul>
                {repoList}
            </ul>
        </div>
    )
}

export default Repositories
