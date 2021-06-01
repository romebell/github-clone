import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Repositories = (props) => {

    const repoList = props.repos.map((item, idx) => {
        return <li key={idx}>{item.name}</li>
    })
    console.log(props)
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
