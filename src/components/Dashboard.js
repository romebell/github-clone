import React, { useState, useEffect } from 'react';
import Axios from 'axios'

const Dashboard = (props) => {

    return(
        <div>
            <h1>DASHBOARD</h1>
            <p>Name: {props.apiRes.name}</p>
        </div>
    )
}

export default Dashboard;