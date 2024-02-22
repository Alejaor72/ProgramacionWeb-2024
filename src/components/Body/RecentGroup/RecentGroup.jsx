import React from 'react'
import { RecentCard } from './RecentItem'

export function RecentCards(props) {
    const {movies} = props
    return (
<>
        
        {
            movies.map((movie)=> {
                return  <RecentCard url={movie.url} title={movie.title} description={movie.description} />
            })
        }
        
        </>
       
            
    )
}
