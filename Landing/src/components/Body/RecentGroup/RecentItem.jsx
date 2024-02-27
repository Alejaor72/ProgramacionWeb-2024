import React from "react"

  export function RecentCard(props) {
      const {url,title, description} = props
      return (
  
        <div className="RecentCard">
            <img src={url} />
            <h3>{title}</h3>
            <p>{description}</p>
      </div>
              
      )
  }