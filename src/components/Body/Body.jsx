import React from 'react'
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
            url: "https://a.ltrbxd.com/resized/film-poster/5/9/1/0/5/3/591053-past-lives-0-300-0-450-crop.jpg?v=c600b7854e",

        }


    ]

    return (
        <main id="main">
            <div className='MoviesRecomended'>
                <Movies title=""
                    movies={movies}

                >
                </Movies>
            </div>

            <Descriptions/>

            <div className='OscarMovies'>
                <Movies title="AND THE OSCAR GOES TO..."
                 movies={movies2}

                >
                </Movies>
                <p>The nominees for Best Motion Picture of the Year at the 96th Academy Awards. Follow the Oscars HQ.</p>
            </div>

        </main>
    )
}