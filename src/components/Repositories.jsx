import React, { useState, useEffect } from 'react';

export const Repositories = (props) => {
  const Repository = ({ obj }) => {
    return (
      <div className="repository" onClick={() => {
        document.location.assign(obj.url)
      }}>
        name: {obj.name}<br />
        description: {obj.description}
      </div>
    )
  }
  return (<>{props?.repositories?.map((repository, idx) =>
    <Repository
      key={idx}
      obj={repository}
    />)}</>)
}

export default Repositories;