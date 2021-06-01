import React, { useState, useEffect } from 'react';
import {  Link } from 'react-router-dom'

const Repositories = (props) => {
console.log(props)

    const listRepos = props.repos.map((item,index) =>{
        return <li><Link 
        to={{
        pathname:"/repositories/show",
        state:item}}
        key={index}>{item.name}
        </Link></li>
    })
    return(

        <div>
            
            <h1>REPOS</h1>
            <ul>
                {listRepos}
            </ul>
        </div>
    )
}

export default Repositories;