import React, { useState, useEffect } from 'react';

// const myProfile = {
//     login: "mauricechevez",
//     id: 82402602,
//     node_id: "MDQ6VXNlcjgyNDAyNjAy",
//     avatar_url: "https://avatars.githubusercontent.com/u/82402602?v=4",
//     gravatar_id: "",
//     url: "https://api.github.com/users/mauricechevez",
//     html_url: "https://github.com/mauricechevez",
//     followers_url: "https://api.github.com/users/mauricechevez/followers",
//     following_url: "https://api.github.com/users/mauricechevez/following{/other_user}",
//     gists_url: "https://api.github.com/users/mauricechevez/gists{/gist_id}",
//     starred_url: "https://api.github.com/users/mauricechevez/starred{/owner}{/repo}",
//     subscriptions_url: "https://api.github.com/users/mauricechevez/subscriptions",
//     organizations_url: "https://api.github.com/users/mauricechevez/orgs",
//     repos_url: "https://api.github.com/users/mauricechevez/repos",
//     events_url: "https://api.github.com/users/mauricechevez/events{/privacy}",
//     received_events_url: "https://api.github.com/users/mauricechevez/received_events",
//     type: "User",
//     site_admin: false,
//     name: "Maurice Chevez",
//     company: null,
//     blog: "",
//     location: "New York",
//     email: null,
//     hireable: null,
//     bio: "Software Engineer",
//     twitter_username: null,
//     public_repos: 11,
//     public_gists: 0,
//     followers: 4,
//     following: 2,
//     created_at: "2021-04-12T16:46:19Z",
//     updated_at: "2021-05-17T03:13:54Z"
//     }
const Settings = (props) => {
console.log(props.myProfile)
// const [profile, setProfile] = useState({}) NOT USING THIS YET
// console.log(profile)
    return (
        <>
        <h1>Settings</h1>
        <div className="container text-left" style={{width:'600px'}}>
        <h2>Public Profile</h2>

        <form>
            <div className="mb-3">
                <label htmlFor="login" style={{fontWeight:'700'}}>Name</label>
                <br />
                <input className="form-control" name="login" id='login' type="text" value={props.myProfile.name}></input>
            </div>
            <div className="mb-3">
                <label htmlFor="publicEmail" style={{fontWeight:'700'}}>Public Email</label>
                <br />
                <input className="form-control" name="publicEmail" id='publicEmail' type="text" value={props.myProfile.email? props.myProfile.email: "Null"}></input>
            </div>
            <div className="mb-3">
                <label htmlFor="bio" style={{fontWeight:'700'}}>Bio</label>
                <br />
                <textarea className="form-control" name="bio" id='bio'  value={props.myProfile.bio}></textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="bio" style={{fontWeight:'700'}}>URL</label>
                <input className="form-control" name="bio" id='bio' type="text" value={props.myProfile.url}></input>
            </div>
            <div className="mb-3">
                <label htmlFor="twitter" style={{fontWeight:'700'}}>Twitter username</label>
                <input className="form-control" name="twitter" id="twitter" value={props.myProfile.twitter_username ? props.myProfile.twitter_username : "Null"}></input>
            </div>
            <div className="mb-3">
                <label htmlFor="company-name" style={{fontWeight:'700'}}>Company</label>
                <input className="form-control" name="company-name" id="company-name" value={props.myProfile.company ? props.myProfile.company : "Null"}></input>
            </div>
            <div className="mb-3">
                <label htmlFor="location" style={{fontWeight:700}}>Location</label>
                <input className="form-control" name="location" id="location" value={props.myProfile.location ? props.myProfile.location : "Null"}></input>
            </div>

        </form>


        </div>
        {/* {End of Container} */}

        </>
    )
}

export default Settings;