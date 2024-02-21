import React from 'react'
import { Movie } from './Movies'


export function Movies(props) {
    const {title, movies} = props
    return (
<>
        
        {
            movies.map((movie)=> {
                return  <Movie url={movie.url} />
            })
        }
        
        </>
       
            
    )
}