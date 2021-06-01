import React, { useState, useEffect } from 'react'
import { githubData } from '../../src/githubData'

// const url = 'https://api.github.com/users/jessejjensen/following?per_page=100'

const UseEffectSecondArgument = () => {
  const [followers, setFollowers] = React.useState(githubData)

  const getUsers = async () => {
    const response = await fetch(githubData)
    const followers = await response.json()
    setFollowers(followers)
    // console.log(users)
  }

  useEffect(() => {
    getUsers()
  }, [])

  const removeItem = (id) => {
    let newFollowing = followers.filter((followers) => followers.id !== id);
    setFollowers(newFollowing);
  };
  
  return (
    <>
      <h3>following on github </h3>
      <ul className='users'>
        {followers.map((followers) => {
          const { id, login, avatar_url, html_url } = followers
          return (
            <li key={followers.id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}></a>
                 <button className="btn" onClick={() => removeItem(followers.id)}>remove</button>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default UseEffectSecondArgument
