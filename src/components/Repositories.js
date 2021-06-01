import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Repositories = (props) => {
    const repoProps = props.apiRes
    console.log(repoProps)

    const repoList = repoProps.map((item, index) => {
        return <li key={index}>{item.name}</li>
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