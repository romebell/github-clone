import React, { useState, useEffect } from "react";

function Settings(props) {
  return (
    <div class="container">
      <div class="row">
        <div class="col-3">
          <img src={props.github.avatar_url} width="75px" />
          <p>{props.github.name}</p>
          <p>Your personal account</p>
          <div class="card">
            <div class="card-body">
              <ul>
                <h6>Account Settings</h6>
                <li>Profile</li>
                <li>Account</li>
                <li>Appreance</li>
                <li>Account security</li>
                <li>Billing and plans</li>
                <li>Security log</li>
                <li>Security and analysis</li>
                <li>Emails</li>
                <li>Notifications</li>
                <li>SSH and GPG keys</li>
                <li>Repositories</li>
                <li>Packages</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-9">
          <h6>Public Profile</h6>
          <p>Name</p>
          <form>
            <input></input>
          </form>
          <p>
            Your name may appear around GitHub where you contribute or are
            mentioned. You can remove it at any time.
          </p>
          <p>Public email</p>
          <form>
            <input placeholder="Select a verified email to display"></input>
          </form>
          <p>
            You have set your email address to private. To toggle email privacy,
            go to email settings and uncheck "Keep my email address private."
          </p>
          <p>Bio</p>
          <form>
            <input placeholder="Tell us a little bit about yourself"></input>
          </form>
          <p>You can @mention other users and organizations to link to them.</p>
        </div>
      </div>
    </div>
  );
}

export default Settings;
