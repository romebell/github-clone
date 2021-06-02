import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Settings = (props) => {

    const [avatar, setAvatar] = useState('')
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [bio, setBio] = useState('');
    const [url, setUrl] = useState('');
    const [twitterUsername, setTwitterUsername] = useState('');
    const [company, setCompany] = useState('');
    const [location, setLocation] = useState('');


    useEffect(() => {
        let url ='https://api.github.com/users/ledezmajaneGH'
        axios.get(url)
        .then(response => {
            console.log(response.data)
            setName(response.data.name); 
            setEmail(response.data.email); 
            setBio(response.data.bio); 
            setUrl(response.data.blog);
            setTwitterUsername (response.data.twitterUsername);
            setCompany(response.data.company)
            setLocation(response.data.location)
            setAvatar(response.data.avatar_url)

        })
    })

    //Create a function to update name using setName

    const updateProfile = e => {
        e.preventDefault();
        console.log(e)
        let newName = e.target.elements.name.value;
        setName(newName);
    }

    return (
        <div className="App">
            <div className="accountSettings">Account settings</div>
            <img width="350px" height="200px" src={avatar} alt="" />

            <hr></hr>
          <h1>Public Profile</h1> 
          <form onSubmit={updateProfile} action="">

                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder= {name} id="name" />
            <hr></hr>
                <label htmlFor="email">Public Email</label>
                <input type="email" name="name" placeholder= {email} id="email" />

            <hr></hr>
                <label htmlFor="bio">Bio</label>
                <input type="bio" name="bio" placeholder= {bio} id="bio" />

             <hr></hr>
                <label htmlFor="url">URL</label>
                <input type="url" name="url" placeholder= {url} id="url" />


            <hr></hr>
                <label htmlFor="twitterUsername">Twitter Username </label>
                <input type="twitterUsername" name="twitterUsername" placeholder= {twitterUsername} id="twitterUsername" />

            <hr></hr>
                <label htmlFor="company">Company</label>
                <input type="company" name="company" placeholder= {company} id="company" />

             <hr></hr>
                <label htmlFor="location">Location</label>
                <input type="location" name="location" placeholder= {location} id="location" />
            <hr></hr>
            <button type="submit">Update Profile</button>

            </form>
        </div>
      );
    }


export default Settings;