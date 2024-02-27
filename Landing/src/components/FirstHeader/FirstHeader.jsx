import React from "react"
import './FirstHeader.css'
import { images } from "../../data/images"

export function FirstHeader(){
    return(
       <>
        
        <div className="first-header">
            <img src={images[0].src} alt="" className="headerImage"/>
            <div className="headerContent">
                <img src={images[3].src} alt="logo" className="logoLetterb2"/>
                <div className="headerContentText">
                    <p className="description">
                    Track films youve watched.<br />
                    Save those you want to see.<br />
                    Tell your friends whats good.
                    </p>
                    <button>GET STARTED - ITS FREE!</button>
                    <div className="lastpart">
                        <p>The social network for film lovers. <br /> Also available on</p>
                        <img src="https://s.ltrbxd.com/static/img/app-platforms.ce52a01b.svg" alt="appleicon" className="socialIcons" />
                    </div>
                </div>
            </div>
        </div>
       </>
     )
}
