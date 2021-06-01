import React, { useState, useEffect } from "react";

function Repositories(props) {
  console.log(props);
  return (
    <div>
      <p>Repos</p>
      <p>{props.github.repos_url}</p>
    </div>
  );
}

export default Repositories;
