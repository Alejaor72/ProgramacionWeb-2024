import React from 'react'
import './Body.css'
import { movies } from '../../data/movies'
import { movies2 } from '../../data/movies2'
import { movies3 } from '../../data/movies3'
import { movies4 } from '../../data/movies4'
import { movies5 } from '../../data/movies5'
import { movies6 } from '../../data/movies6'
import { Movies } from './Movies/MoviesGroup'
import { StoriesGroup} from './Stories/StoriesGroup'
import { RecentCards } from './RecentGroup/RecentGroup'
import { Descriptions } from './Descriptions/Descriptions'

const moviedata = movies;
const moviedata2 = movies2;
const moviedata3 = movies3;
const moviedata4 = movies4;
const moviedata5 = movies5;
const moviedata6 = movies6;

export function Body() {

    return (
        <main id="main">
            <div className='MoviesRecomended'>
                <Movies
                    movies={moviedata}

                >
                </Movies>
            </div>

            <Descriptions/>

            <div className='OscarMovies'>
                <h3>AND THE OSCAR GOES TO...</h3><hr />
                <div className='OscarMoviesCards'>
                    <Movies
                    movies={moviedata2}

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
                    movies={moviedata3}

                    >
                    </Movies>
                </div>
            </div>

            <div className='PopularContent'>
                <h2>Write and share reviews. Compile<br /> your own lists. Share your life<br /> in film.</h2>
                <p>Below are some popular reviews and lists from this week. <br />
                Sign Up to create your own</p>
            </div>


            <div className='RecentCont'>
                <div id='InfoRecent'>
                  <h3>RECENT SHOWDOWNS</h3>
                  <p>MORE</p> 
                </div>
                <hr />
                   <RecentCards
                    movies={moviedata4}

                    >
                    </RecentCards>
            </div>

            <div className='RecentCont'>
                <div id='InfoRecent'>
                  <h3>RECENT NEWS</h3>
                  <p>MORE</p> 
                </div>
                <hr />
                   <RecentCards
                    movies={moviedata5}

                    >
                    </RecentCards>
            </div>
        </main>
    )
}