import React, { useState } from 'react'
import './Banner.css'
import { images } from "../../data/images"
import { menu } from '../../data/menu'

export function Banner(){
   const [showMenu, setShowMenu] = useState(false)

  console.log('state value:', showMenu)

  const handleShowMenu = (event) => {
    setShowMenu(!showMenu)
  }
    return(
       <>
       <div className="Banner">
         <img src={images[3].src} alt="logo" width="15%" className="logoLetterb"/>
         <div className="Bottoms">
            <h3>SIGN IN</h3>
            <h3>CREATE AN ACCOUNT</h3>
            <h3>FILMS</h3>
            <h3>LIST</h3>
            <h3>MEMBERS</h3>
            <h3>JOURNAL</h3>
         </div>
         <div className="input">
            <input type="text" placeholder=""/>
            <img src={images[4].src} alt="" />
         </div>
         <div className="iconsBanner">
            <img src={images[1].src} alt="" className="iconB" width="7%"/>
            <img src={images[2].src} alt="" className="iconB" width="6%" onClick={handleShowMenu}/>
           <img src={images[4].src} alt="searchIcon" className="iconB" width="5%"/>
         </div>
       </div>
       <div className={`menubar ${showMenu ? 'show' : ''}`} id='bar'>
        <Menu items={menu} />
      </div>
       </>
    )
    function Menu ({ items, showMenu }) {
      return (
        <div className={!showMenu ? 'hidden' : ''}>
            {
                items.map((item) =>
                  <MenuItem
                    item={item}
                    key={item.id}
                  />)
          }
        </div>
      )

      function MenuItem ({ item }) {
         const { text, src } = item
         return (
            <div className='menu-item'>
               <img src={src} alt="" />
               <a href=''>{text}</a>
               <hr />
            </div>
         )
       }
    }
}