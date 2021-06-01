import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Dashboard = (props) => {
    return (
        <div>
            <h1>Dashboard</h1>
            {props.apiRes.login}
        </div>
    )
}

export default Dashboard
