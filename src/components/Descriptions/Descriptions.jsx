import React from "react"
import './Descriptions.css'

export function Descriptions(){
    return(
        <>
        <p>LETTERBOXD LETS YOU…</p>
        <div>
        <section className="green">
            <img src="https://i.postimg.cc/PxjQmD0P/Fill-117-Copy.png" alt="" />
            <p>Keep track of every film youve ever watched (or just start from the day you join)</p>
        </section>
        <section className="green">
            <img src="https://i.postimg.cc/ZK2383d4/Shape-Copy-4.png" alt="" />
            <p>Show some love for your favorite films, lists and reviews with a “like”</p>
        </section>
        <section className="orange">
            <img src="https://i.postimg.cc/8c3FbQst/Combined-Shape-Copy-9.png" alt="" />
            <p>Write and share reviews, and follow friends and other members to read theirs</p>
        </section>
        <section className="orange">
            <img src="https://i.postimg.cc/yxJxxQn9/Fill-115-Copy-15.png" alt="" />
            <p>Rate each film on a five-star scale (with halves) to record and share your reaction</p>
        </section>
        <section className="blue">
            <img src="https://i.postimg.cc/jqWyLZDZ/Combined-Shape-Copy-10.png" alt="" />
            <p>Keep a diary of your film watching (and upgrade to Pro for comprehensive stats)</p>
        </section>
        <section className="blue">
            <img src="https://i.postimg.cc/Y2JYgYgk/Combined-Shape-Copy-8.png" alt="" />
            <p>Compile and share lists of films on any topic and keep a watchlist of films to see</p>
        </section>
        </div>
        </>
    )
}