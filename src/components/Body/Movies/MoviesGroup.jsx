import React from 'react'
import { Movie } from './Movies'


export function Movies(props) {
    const {title, movies} = props
    return (
<>
        <h3>{title}</h3>
        
        <div id="movieboxgroup">
        {
            movies.map((movie)=> {
                return  <Movie url={movie.url} />
            })
        }
        </div>
        
        </>
       
            
    )
}