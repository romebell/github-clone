import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Explore = (props) => {

    const [avatar, setAvatar] = useState('');



    useEffect(() => {
        let url = 'https://api.github.com/users/chrisrachal'
        axios.get(url)
        .then(response => {
            // console.log(response.data);
                setAvatar(response.data.avatar_url);
        })
    });
    return(
        <div>
            <h1>Explore Page</h1>
            <p>Topics etc</p>
            <img src={avatar} />
        </div>
    )
}

export default Explore;