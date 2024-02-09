import React from "react"
import './Banner.css'

export function Banner(){
    return(
       <>
       <div className="Banner">
         <img src="https://i.postimg.cc/SNqnZxhc/Group-2.png" alt="logo" width="15%" className="logoLetterb"/>
         <div className="Bottoms">
            <h3>SIGN IN</h3>
            <h3>CREATE AN ACCOUNT</h3>
            <h3>FILMS</h3>
            <h3>LIST</h3>
            <h3>MEMBERS</h3>
            <h3>JOURNAL</h3>
         </div>
         <div className="input">
            <input type="text" placeholder=""/>
            <img src="https://i.postimg.cc/YSJ9QpRG/Group.png" alt="" />
         </div>
         <div className="iconsBanner">
            <img src="https://i.postimg.cc/vHBddxDR/Group-3.png" alt="" className="iconB" width="7%"/>
            <img src="https://i.postimg.cc/7LQK0bwz/Combined-Shape.png" alt="" className="iconB" width="7%"/>
           <img src="https://i.postimg.cc/YSJ9QpRG/Group.png" alt="searchIcon" className="iconB" width="5%"/>
         </div>
       </div>
       </>
    )
}