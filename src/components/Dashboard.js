import React, { useState, useEffect } from 'react';



const Dashboard = (props) => {


    return(
        <div>
            <h1>Dashboard</h1>
            <p>{props.userData.name}</p>
            <p>{props.userData.location}</p>
            <p>{props.userData.bio}</p>
            <a href={props.userData.blog}>LinkedIn</a>

        </div>
    )

}

export default Dashboard;

// we named our api data userData and passed it down here using <Route from App.js