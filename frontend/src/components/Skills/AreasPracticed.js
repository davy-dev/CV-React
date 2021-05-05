import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCheckSquare} from "@fortawesome/free-solid-svg-icons"


export default function AreasPracticed() {
  const [displayList, setDisplayList] = useState(false);
  const list=[
  { id:1,
    domaine: "Implémentation d’API RESTFULL"},
    {id: 2,
    domaine:"Réaliser l’intégration et mettre en forme l’affichage des données"},
    {id:3,
    domaine:"Sécurisation et authentification de Niveau 1 à 6"},
    {id:4,
    domaine:"Création de clusters et bases de données noSQL"},
    {id:5,
    domaine:"Implémenter un système de payement en ligne"},
    {id:6,
    domaine:"Réaliser la maquette d'une application web responsive"},
    {id:7,
    domaine:"Dynamiser un site avec JavaScript"},
    {id:8,
    domaine:"Déployer son application web avec Heroku"},
    {id:9,
    domaine:"Utiliser Git et Github pour gérer son code source "}

  ]

  function handleDisplay() {

    displayList ? setDisplayList(false) 
    : setDisplayList(true);

  }

  const listAnime = useRef(null);

  useEffect(() => {
    

    displayList&&
       gsap.from(listAnime.current, {
        duration:0.8,
        rotateY:100,
        autoAlpha:0,
        x:-200
        })

  }, [displayList]);

  return (
    <div
      onMouseLeave={handleDisplay}
      onMouseEnter={handleDisplay}
      className="areas-practiced"
    >
      {!displayList && <h2>Domaines pratiqués</h2>}

      {displayList && (
        <ul ref={listAnime}>
         {list.map(e=>(
           <li key={e.id}> <FontAwesomeIcon icon={faCheckSquare}/>  {e.domaine}</li>
         ))}
        </ul>
      )}
    </div>
  );
}
