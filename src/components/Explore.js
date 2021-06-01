import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Explore = (props) => {


    const expList = props.expData.map((item, index) => { //create map function to display results
        return <p key={index}>{item.actor.display_login}, {item.type}, {item.repo.name}</p>
    })
  

   

    return(
        <div>
            <h1>Explore</h1>
            <ul>
                {expList}
              
            </ul>

        </div>
    )

}

export default Explore;