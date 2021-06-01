import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = (props) => {
    const { info } = props;
    let dashboardUrl = info.
        received_events_url;

    const [dash, setDash] = useState([]);

    const getDash = () => {
        axios.get(dashboardUrl).then((response) => {
            console.log(response.data);
            setDash(response.data)
        });
    };

    useEffect(() => {
        getDash();
    }, []);


    return (
        <h2>Dashboard</h2>
    )
}

export default Dashboard;

