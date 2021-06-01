import React, { useState, useEffect } from 'react';

import axios from 'axios'

const Repositories = (props) => {


    
        let [user, setUser] = useState({});
        let userUrl = "https://api.github.com/users/dannyjajr"
        useEffect(() => {
            axios.get(props.userUrl)
                .then(response => {
                    setUser(response.data)
                })
        })

    

    // function getUserRepo(props) {
    //     let [repo, repoUser] = useState({});
    //     let repoUrl = "https://api.github.com/users/dannyjajr/repos"

    //     useEffect(() => {
    //         axios.get(props.repoUrl)
    //             .then(reponse => {
    //                 repoUser(response.data)
    //             })

    //     })



    // }


    let repoInfogenral = ""



    return (
        <div>
            {repoInfogenral}
        </div>
    )

}

export default Repositories;