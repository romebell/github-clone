import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Repositories = (props) => {

    // const [userRepos, setUserRepos] = useState([])
    // let exploreUrl = props.use

    // async function fetchExplore() {
    //     const exploreRequest = await axios.get(`${exploreUrl}`)
    //     const exploreResult = await exploreRequest.data
    //     setUserRepos(exploreResult)


    // }

    // useEffect(() => {
    //     fetchExplore();
    
    //   }, [])  // empty array means call this api once and be done
    //   console.log(userRepos)

    const repoList = props.repoData.map((item, index) => { //create map function to display results
        return <p key={index}>{item.name}</p>
    })


    return(
        <div>
            <h1>Repositories</h1>
            <ul>
                {repoList}
            </ul>

        </div>
    )
}

export default Repositories;