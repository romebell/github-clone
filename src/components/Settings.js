import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Settings = (props) => {
    const [avatar, setAvatar] = useState('');
    const [name, setName] = useState('');


    useEffect(() => {
        let url = 'https://api.github.com/users/chrisrachal'
        axios.get(url)
        .then(response => {
            // console.log(response.data);
                setAvatar(response.data.avatar_url);
                setName(response.data.name);
        })
    });
    return(
        <div>
            <h1>Settings</h1>
            <p>{name}</p>
            <img src={avatar} />
        </div>
    )
}

export default Settings;