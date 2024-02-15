import './style.css'
import React from 'react'
import { Banner } from "./components/Banner/Banner"
import { FirstHeader } from './components/FirstHeader/FirstHeader'
import { Body } from "./components/Body/Body";

export default function App(){
    return(
        <>
            <Banner/>
            <FirstHeader/>
            <Body/>
        </>
    )
}
