import React from 'react'
import './Navbar.css'

const  Navbar = () => (

      <nav className = "navbar navbar-expand-lg navbar-dark bg-dark">
          <img 
          src="https://avatars.githubusercontent.com/u/76889107?s=60&v=4" 
          width ="50"
          height="50"
          className = "mr-3 avatar"
          alt ="profile"
          />
          <h3 style = {{color: "white"}}>Username</h3>
          <a className="m1-auto d-flex alignitems-center" href="#" >
              Get email updates
          </a>
      </nav>
);


export default Navbar