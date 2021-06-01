import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = (props) => {
    const { info } = props;
    let dashUrl = info.received_events_url;
    console.log(dashUrl)

    const [dash, setDash] = useState([]); 

    const getDash = () => {
        axios.get(dashUrl).then((response) => {
          setDash(response.data)
          console.log(response.data);
        });
      };
      useEffect(() => {
        getDash();
      }, []);
    return(null)

}

export default Dashboard;