import React from "react"

  export function Stories(props) {
      const {url,icon, creator, title, description, button} = props
      return (
  
        <article className="StoriesCard">
            <img src={url} />
            <div className="card-text">
                <div className="User">
                    <img src={icon} />
                    <p>{creator}</p>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <h4>{button}</h4>
            </div>
        </article>
              
      )
  }