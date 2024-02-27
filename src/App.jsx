import './style.css'
import React from 'react'
import { Banner,FirstHeader,Body,Footer } from "./components/index"

export default function App(){
    return(
        <>
            <Banner/>
            <FirstHeader/>
            <Body/>
            <Footer/>
        </>
    )
}
