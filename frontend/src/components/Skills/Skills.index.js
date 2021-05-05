import React ,{useRef,useEffect} from "react";
import AreasPracticed from "./AreasPracticed";
import Dependencies from "./Dependencies";
import Langage from "./Langage";
import "../../styles/Skills.scss"
import {gsap} from "gsap"

export default function Skills() {

const animCard=useRef(null)

useEffect(()=>{
  console.log(animCard)
 const TL= gsap.timeline()
 TL.from(animCard.current.children[1].children[0],{

  duration:0.3,
  y:-200,
  autoAlpha:0,
})
 .from(animCard.current.children[1].children[1],{
   duration:0.5,
  y:-200,
  autoAlpha:0,
})
 .from(animCard.current.children[1].children[2],{
   duration:0.3,
  y:-200,
  autoAlpha:0,
})
 .from(animCard.current.children[0],{
  autoAlpha:0,
})
},[])


  return (

    

    <div ref={animCard} className="Skills">

      <h2 className="h2">Compétences</h2>
    <div className="container">
      
      <Langage />

      <Dependencies />

      <AreasPracticed />
    </div>
      

    </div>
  );
}
