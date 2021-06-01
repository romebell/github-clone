import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Repositories = (props) => {
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [username, setUsername] = useState('');
    const [bio, setBio] = useState('');
    const [avatar, setAvatar] = useState('');

    useEffect(() => {
        let url = 'https://api.github.com/users/chrisrachal'
        axios.get(url)
        .then(response => {
        
            setAvatar(response.data.avatar_url);
            setName(response.data.name)
        })
    });
    

    return(
        <div>
            <h1>Repos</h1>
            <p>{name}</p>
            <img src={avatar} />

        </div>
    )
}

export default Repositories;