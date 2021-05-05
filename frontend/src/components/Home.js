import React,{useRef,useEffect} from "react";
import "../styles/Home.scss"
import {gsap} from "gsap"


export default function Home() {
  const animePage=useRef(null)

  useEffect(() => {
   const TL=gsap.timeline()
     TL.from(animePage.current,{
       x:-100,
       autoAlpha:0
     })
     TL.from(animePage.current.children[0],{
       autoAlpha:0,
       duration:4
     },1)
  }, [])


  return (
    <div ref={animePage} className="Home" >
   
    
        <h2>Développeur web fullstack</h2>
        <a href="./media/CV-DEVELOPPEUR-WEB-FULLSTACK-ALTERNANCE.pdf" target="_blanc">Télécharger le CV</a>
      
  
    </div>
  );
}
