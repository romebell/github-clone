import React, { useState, useEffect } from "react";

function Explore(props) {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-2">
            <div class="card">
              <div class="card-body">
                <img src={props.github.avatar_url} width="75px" />
                <p>{props.github.name}</p>
                <p>{props.github.login}</p>
                <p>
                  <a href="">0 starred topics</a>
                </p>
                <p>
                  <a href="">0 starred repositories</a>
                </p>
              </div>
            </div>
          </div>
          <div class="col-8">
            <header>
              <nav>
                <ul>
                  <li>
                    <a href="/auth/login">Explore</a>
                  </li>
                  <li>
                    <a href="/auth/logout">Topics</a>
                  </li>
                  <li>
                    <a href="/profile">Trending</a>
                  </li>
                  <li>
                    <a href="/faves">Collections</a>
                  </li>
                  <li>
                    <a href="/faves">Events</a>
                  </li>
                  <li>
                    <a href="/faves">GitHun Sponsors</a>
                  </li>
                </ul>
              </nav>
            </header>
            <h6>Here's what we found based on your interests...</h6>
            <div class="card">
              <div class="card-body">
                <p>Based on people you follow</p>
                <h6>Sequelize/Sequelize</h6>
              </div>
              <div class="card-body">
                <h6>
                  TypeScript complains about $nested.column$ syntax in query
                  where clause.
                </h6>
              </div>
            </div>
          </div>
          <div class="col-2">
            <div class="card">
              <div class="card-body">
                <p>Trending repositories today</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
