import React from 'react'
import "./Userinfo.css"

export const UserInfo = () => (
    <div className="user_info">
        <img
            src="https://avatars.githubusercontent.com/u/76889107?s=400&u=2323ec3b54b5016e32fd96ad92902c6ce6450f65&v=4"
            className="p-2 avatar"
            width="130"
            height="130"
            alt='profileImgae'
        />
        <div className="user__infoDetails">
            <h5>UserName</h5>
            <div className="user__infos">
            <div className="user_infoDetail">
                <i className="fa fa-map-marker pr1" />
                <span>Location .</span>
            </div>
            <div className="user_infoDetail">
                <i className= "fa fa-envelope pr-1"/>
                <span>email .</span>
               </div>
               <div className="user_infoDetail">
                <i className = "fa fa-group pr-1"/>
                    <span>Followers .</span>

               </div>
               <div className="user_infoDetail">
                <i className = "fa fa-heart pr-1"/>
                    <span>Following .</span>

               </div>

        </div>
  </div>
    </div>
)


export default UserInfo