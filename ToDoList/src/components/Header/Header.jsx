import React from "react";
import { images } from "../../data/images"

export function Header(){
    return(
        <>
        <div>
            <img src={images[0].src} alt="star" className="starIcon"/>
            <h1>To Do List</h1>
            <h2>By Andrea Oviedo and Alejandra Ordoñez</h2>
            <img src={images[1].src} alt="star" className="starIcon"/>
        </div>
        
        </>
    )
}
