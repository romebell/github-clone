import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Repositories = (props) => {
    const {info} = props;
    let repoUrl = info.repos_url;
    console.log(repoUrl)

    const [repo, setRepo] = useState([]);
    const getRepo = () => {
        axios.get(repoUrl).then((response) => {
            console.log(response.data);
        });
    };
    useEffect(() => {
        getRepo();
    }, []);

    

    return (
        <div>Repositories</div>
    )
}

export default Repositories;