import React, { useState, useEffect } from "react";

function Dashboard(props) {
  console.log(props);
  return (
    <div class="container">
      <div class="row">
        <div class="col-2">
          <p>
            Repositories <button>New</button>
          </p>
          <form>
            <input placeholder="Find a repository"></input>
          </form>
          <p>
            <a href="">aprin418/Liquor-list</a>
          </p>
          <p>
            <a href="">aprin418/ReactNativeNucamp</a>
          </p>
          <p>
            <a href="">aprin418/ReactNucamp</a>
          </p>
          <p>
            <a href="">aprin418/Javascript</a>
          </p>
          <p>
            <a href="">aprin418/fruit-filter</a>
          </p>
          <p>
            <a href="">aprin418/hello-express</a>
          </p>
          <p>
            <a href="">aprin418/dom-events</a>
          </p>
          <a href="">Show more</a>
          <p>Working with a team?</p>
          <p>
            GitHub is built for collaboration. Set up an organization to improve
            the way your team works together, and get access to more features.
          </p>
          <button>Create an organization</button>
        </div>
        <div class="col-8">
          <div class="card">
            <div class="card-body">
              romebell created a repository romebell/github-clone 5 hours ago
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              romebell created a repository romebell/amazon-clone 4 days ago
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              romebell created a repository romebell/fruit-filter 5 days ago
            </div>
          </div>
        </div>
        <div class="col-2">
          <h6>Explore Repositories</h6>
          <p>gramps-project/gramps</p>
          <p>Source code for Gramps Genealogical program</p>
          <p>kettanaito/naming-cheatsheet</p>
          <p>
            Comprehensive language-agnostic guidelines on variables naming. Home
            of the A/HC/LC pattern
          </p>
          <p>isaachinman/next-i18next</p>
          <p>The easiest way to translate your NextJs apps.</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
