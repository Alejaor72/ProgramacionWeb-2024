import React from "react"
import './Descriptions.css'
import { images } from "../../../data/images"

export function Descriptions(){
    return(
        <>
        <p className="title">LETTERBOXD LETS YOU…</p>
        <div  id='description'>
        <section className="green">
            <img src={images[5].src} alt="" />
            <p>Keep track of every film youve ever watched (or just start from the day you join)</p>
        </section>
        <section className="green">
            <img src={images[6].src} alt="" />
            <p>Show some love for your favorite films, lists and reviews with a “like”</p>
        </section>
        <section className="orange">
            <img src={images[7].src} alt="" />
            <p>Write and share reviews, and follow friends and other members to read theirs</p>
        </section>
        <section className="orange">
            <img src={images[8].src} alt="" />
            <p>Rate each film on a five-star scale (with halves) to record and share your reaction</p>
        </section>
        <section className="blue">
            <img src={images[9].src} alt="" />
            <p>Keep a diary of your film watching (and upgrade to Pro for comprehensive stats)</p>
        </section>
        <section className="blue">
            <img src={images[10].src} alt="" />
            <p>Compile and share lists of films on any topic and keep a watchlist of films to see</p>
        </section>
        </div>
        </>
    )
}