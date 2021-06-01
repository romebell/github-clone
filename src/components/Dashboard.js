import React, { useState, useEffect } from 'react';

const Dashboard = (props) => {
    return (
        <div>
            <h1>Dashboard</h1>
            {props.apiRes.name}
        </div>
    )
}

export default Dashboard
