import React, { useState,useRef, useEffect } from "react";
import {gsap} from "gsap"


export default function Langage() {

  const [displayList,setDisplayList]=useState(false)

  function handleDisplay(){
    displayList?setDisplayList(false)
    :setDisplayList(true)
  }

  const animeList=useRef(null)

  useEffect(()=>{
    displayList&&
    gsap.from(animeList.current,{
      rotateY:100,
    autoAlpha:0,
      x:-200

    })
  },[displayList])

  return (
    <div onMouseLeave={handleDisplay} onMouseEnter={handleDisplay} className="langage">
      {!displayList&&(<h2>Languages ou Framework  pratiqués</h2>)}
      
      {displayList&&( 
       
      <ul ref={animeList}>
        <li><img  src="./assets/js-square.svg" alt="js-icon" /> JavaScript (ES6)</li>
        <li> <img  src="./assets/react.svg" alt="react-icon" /> React</li>
        <li> <img  src="./assets/css3.svg" alt="css3-icon"/> CSS (prépocesseur SASS)</li>
        <li> <img  src="./assets/html5.svg" alt="html-icon"/> HTML</li>
        <li> <img  src="./assets/php.svg" alt="php-icon"/> PHP</li>
        <li> <img  src="./assets/bootstrap.svg" alt="bootstrap-icon"/> Bootstrap</li>
      </ul>)}
    
      
    </div>
  );
}
