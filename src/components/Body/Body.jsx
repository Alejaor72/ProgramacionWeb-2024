import React from 'react'
import './Body.css'
import { Movies } from './Movies/MoviesGroup'
import { Descriptions } from './Descriptions/Descriptions'

export function Body() {

    const movies = [
        {
            id: crypto.randomUUID(),
            url: "https://a.ltrbxd.com/resized/film-poster/7/1/0/3/5/2/710352-poor-things-0-300-0-450-crop.jpg?v=a0f2ee9a0e",

        },
        {
            id: crypto.randomUUID(),
            url: "https://a.ltrbxd.com/resized/film-poster/4/3/8/6/9/2/438692-the-boy-and-the-heron-0-300-0-450-crop.jpg?v=521e114164",

        },
        {
            id: crypto.randomUUID(),
            url: "https://a.ltrbxd.com/resized/film-poster/8/3/5/7/7/4/835774-saltburn-0-300-0-450-crop.jpg?v=b58cbd3b08",

        },
        {
            id: crypto.randomUUID(),
            url: "https://a.ltrbxd.com/resized/film-poster/8/8/8/0/5/4/888054-fallen-leaves-0-300-0-450-crop.jpg?v=0726b99f09",

        },
        {
            id: crypto.randomUUID(),
            url: "https://a.ltrbxd.com/resized/film-poster/9/4/7/0/3/0/947030-monster-0-300-0-450-crop.jpg?v=9787f75532",

        },
        {
            id: crypto.randomUUID(),
            url: "https://a.ltrbxd.com/resized/sm/upload/zh/p4/cg/6v/may-december-0-300-0-450-crop.jpg?v=40f7f230a3",

        }


    ]
    
    const movies2 = [
        {
            id: crypto.randomUUID(),
            url: "https://a.ltrbxd.com/resized/film-poster/9/5/2/8/1/2/952812-american-fiction-0-300-0-450-crop.jpg?v=fbc2c6daf1",

        },
        {
            id: crypto.randomUUID(),
            url: "https://a.ltrbxd.com/resized/film-poster/8/2/2/0/9/3/822093-anatomy-of-a-fall-0-300-0-450-crop.jpg?v=4efab8aedc",

        },
        {
            id: crypto.randomUUID(),
            url: "https://a.ltrbxd.com/resized/film-poster/2/7/7/0/6/4/277064-barbie-0-300-0-450-crop.jpg?v=1b83dc7a71",

        },
        {
            id: crypto.randomUUID(),
            url: "https://a.ltrbxd.com/resized/film-poster/7/5/5/5/6/4/755564-the-holdovers-0-300-0-450-crop.jpg?v=99bbdd8955",

        },
        {
            id: crypto.randomUUID(),
            url: "https://a.ltrbxd.com/resized/film-poster/3/9/8/0/0/9/398009-killers-of-the-flower-moon-0-300-0-450-crop.jpg?v=49b577149d",

        },
        {
            id: crypto.randomUUID(),
            url: "https://a.ltrbxd.com/resized/film-poster/4/5/3/0/6/9/453069-maestro-0-300-0-450-crop.jpg?v=1dde1fa55f",

        },
        {
            id: crypto.randomUUID(),
            url: "https://a.ltrbxd.com/resized/film-poster/7/8/4/3/2/8/784328-oppenheimer-0-300-0-450-crop.jpg?v=e3c6e7a32c",

        },
        {
            id: crypto.randomUUID(),
            url: "https://a.ltrbxd.com/resized/film-poster/5/9/1/0/5/3/591053-past-lives-0-300-0-450-crop.jpg?v=c600b7854e",

        },
        {
            id: crypto.randomUUID(),
            url: "https://a.ltrbxd.com/resized/film-poster/7/1/0/3/5/2/710352-poor-things-0-300-0-450-crop.jpg?v=a0f2ee9a0e",

        },
        {
            id: crypto.randomUUID(),
            url: "https://a.ltrbxd.com/resized/film-poster/3/9/8/8/0/0/398800-the-zone-of-interest-0-300-0-450-crop.jpg?v=0514f658e1",

        }


    ]

    const movies3 = [
        {
            id: crypto.randomUUID(),
            url: "https://a.ltrbxd.com/resized/film-poster/5/0/8/2/4/6/508246-another-round-0-300-0-450-crop.jpg?v=6227862b11",

        },
        {
            id: crypto.randomUUID(),
            url: "https://a.ltrbxd.com/resized/film-poster/9/6/6/9/9/0/966990-anyone-but-you-0-300-0-450-crop.jpg?v=62514c5b09",

        },
        {
            id: crypto.randomUUID(),
            url: "https://a.ltrbxd.com/resized/film-poster/3/1/3/1/3/7/313137-dead-hands-dig-deep-0-300-0-450-crop.jpg?v=63a4b46703",

        },
        {
            id: crypto.randomUUID(),
            url: "https://a.ltrbxd.com/resized/film-poster/7/6/3/1/6/0/763160-argylle-0-300-0-450-crop.jpg?v=82c014880d",

        },
        {
            id: crypto.randomUUID(),
            url: "https://a.ltrbxd.com/resized/alternative-poster/4/2/7/0/7/p/lnJvEk0AiAg5InUZRhgp8EJmVc5-0-300-0-450-crop.jpg?v=306d0e8303",

        },
        {
            id: crypto.randomUUID(),
            url: "https://a.ltrbxd.com/resized/film-poster/5/6/0/6/9/7/560697-madame-web-0-300-0-450-crop.jpg?v=305a4aead1",

        },
        {
            id: crypto.randomUUID(),
            url: "https://a.ltrbxd.com/resized/film-poster/7/3/1/2/2/2/731222-bottoms-0-300-0-450-crop.jpg?v=11b87368c8",

        },
        {
            id: crypto.randomUUID(),
            url: "https://a.ltrbxd.com/resized/film-poster/6/7/1/8/1/5/671815-loki-0-300-0-450-crop.jpg?v=f9c17cfc8d",

        }


    ]

    return (
        <main id="main">
            <div className='MoviesRecomended'>
                <Movies
                    movies={movies}

                >
                </Movies>
            </div>

            <Descriptions/>

            <div className='OscarMovies'>
                <h3>AND THE OSCAR GOES TO...</h3><hr />
                <div className='OscarMoviesCards'>
                    <Movies
                    movies={movies2}

                    >
                    </Movies>
                </div>
                <p>The nominees for Best Motion Picture of the Year at the 96th Academy Awards. Follow the Oscars HQ.</p>
            </div>

            <div className='ReviewedMovies'>
                <div id='Info'>
                  <h3>JUST REVIEWED</h3>
                  <p>1,779,064,192 films watched</p> 
                </div>
                <hr />
                <div className='ReviewedMoviesCards'>
                    <Movies
                    movies={movies3}

                    >
                    </Movies>
                </div>
            </div>

            <div className='PopularContent'>
                <h2>Write and share reviews. Compile<br />your own lists. Share your life<br />in film.</h2>
                <p>Below are some popular reviews and lists from this week. </p>
                <p>Sign Up to create your own.</p>
            </div>
        </main>
    )
}