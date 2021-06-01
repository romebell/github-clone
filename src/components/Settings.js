import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Settings = (props) => {

    const login = () => {
        login(props.apiRes.login)
    }

    return (
        <div>
            <h1>Settings</h1>
            <p>Name {login}</p>
        </div>
    )
}

export default Settings
