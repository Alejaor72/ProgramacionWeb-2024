import React from "react"
import './FirstHeader.css'

export function FirstHeader(){
    return(
       <>
        
        <div className="first-header">
            <img src="https://i.postimg.cc/52yWhD02/Group-5.jpg" alt="" className="headerImage"/>
            <div className="headerContent">
                <img src="https://i.postimg.cc/SNqnZxhc/Group-2.png" alt="logo" className="logoLetterb2"/>
                <div className="headerContentText">
                    <p className="description">
                    Track films youve watched.<br />
                    Save those you want to see.<br />
                    Tell your friends whats good.
                    </p>
                    <button>GET STARTED - ITS FREE!</button>
                    <div className="lastpart">
                        <p>The social network for film lovers.  Also available on</p>
                        <img src="https://s.ltrbxd.com/static/img/app-platforms.ce52a01b.svg" alt="appleicon" />
                    </div>
                </div>
            </div>
        </div>
       </>
     )
}

//<img src="https://i.postimg.cc/CKgCbSp7/image-3.jpg" alt="" className="headerImage"/>