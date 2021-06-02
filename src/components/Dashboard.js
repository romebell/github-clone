import React, { useState, useEffect } from 'react';

const Dashboard = (props) => {
    console.log(props)
    let dash = props.dash
    let dashEvents = props.dash.map((e, idx) => {
        return <p key={idx}>{e.actor.login} {e.type} <a href={`https://github.com/${e.repo.name}`}>{e.repo.name}</a></p>
    })
    
    return(
        <div>
            <h1>Dashboard</h1>
            {dashEvents}
        </div>
    )
}

export default Dashboard;