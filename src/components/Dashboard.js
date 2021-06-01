import React, { useState, useEffect } from 'react';

const Dashboard = (props) => {
    const userInfo = props.apiRes
    return(
        <div>
            <h1>Dashboard</h1>
            <img src={userInfo.avatar_url}/>
            <p><b>{userInfo.name}</b></p>
            <p>{userInfo.login}</p>
            <p>{userInfo.bio}</p>
        </div>
    )
}

export default Dashboard;