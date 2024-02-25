import React from 'react'
import { Stories } from './Stories'

export function StoriesGroup(props) {
    const {movies} = props
    return (
<>
        <div className="StoriesGroup">
        {
            movies.map((movie)=> {
                return  <Stories url={movie.url} icon={movie.icon} creator={movie.creator} title={movie.title} description={movie.description} button={movie.button}/>
            })
        }
        </div>
        </>
       
            
    )
}
