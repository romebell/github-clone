import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Repositories = (props) => {
    const { info } = props;
    let repoUrl = info.repos_url;
    // console.log(repoUrl);

    const [repo, setRepo] = useState([]);

    const getRepo = () => {
        axios.get(repoUrl).then((response) => {
            console.log(response.data);
            setRepo(response.data)
        });
    };

    useEffect(() => {
        getRepo();
    }, []);

    let thisRepo = repo.map((r, idx) => {
        <div key={idx}>{r.name}</div>
    })


    return (
        <div>
            <h2>Repo page</h2>
            <div className="row">
                <div className="col">
                    <img src={info.avatar_url} />
                    <p>{info.login}</p>
                    <p>{info.bio}</p>
                    <p>{info.location}</p>
                </div>
                <div className="col">
                    <div className="card">
                        <p>{repo[0].name}</p>
                        <p>{repo[0].description}</p>
                        {/* {thisRepo} */}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Repositories;