import './style.css'
import React from 'react'
import { Header } from "./components/Header/Header"
import { Body } from "./components/Body/Body"
import { Footer } from "./components/Footer/Footer"
export default function App(){
    return(
        <div>
            <Header/>
            <Body />
            <Footer />
        </div>
    )
}