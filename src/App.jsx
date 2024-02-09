import './style.css'
import React from 'react'
import { Banner } from "./components/Banner/Banner"
import { FirstHeader } from './components/FirstHeader/FirstHeader'
import { MoviesRecomended } from './components/MoviesRecomended/MoviesRecomended'
import { Descriptions } from './components/Descriptions/Descriptions'
import {OscarSection} from './components/OscarSection/OscarSection'

export default function App(){
    return(
        <>
            <Banner/>
            <FirstHeader/>
            <MoviesRecomended/>
            <Descriptions/>
            <OscarSection/>
        </>
    )
}
