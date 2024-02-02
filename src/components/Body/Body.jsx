import './style.css'
import React from 'react'
import frogImage from './frog.jpg'
export function Body(){
    return(
        <main>
            <img src="${frogImage}" alt="frog" />
        </main>
    )
}