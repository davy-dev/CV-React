import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.scss";
import { gsap } from "gsap";

export default function Nav() {
  const [toggleNav, setToggleNav] = useState(false);
  const animeNav = useRef(null);
  const animeH2 = useRef(null);
  const [media, setmedia] = useState(window.innerWidth);

// ANIMATION TO SHOW AND HIDE THE NAV=====================
  function handleMenue() {
    if (!toggleNav) {
      

      gsap.to(animeNav.current, {
        duration: 1,
        rotateY: -160,
        x: -50,
        y: 30,
        ease: "power4.Out",
        scaleY: 0.07,
        scaleX: 0.2,
      });
      gsap.to(animeH2.current, {
        x: 100,
        y: 55,
        autoAlpha: 1,
      });
      setToggleNav(true);
    } else {
      gsap.to(animeNav.current, {
        duration: 1,
        rotateY: 34,
        x: 10,
        ease: "power4.Out",
        scale: 1,
      });
      gsap.to(animeH2.current, {
        x: -100,
        autoAlpha: 0,
      });

      setToggleNav(false);
      
    }
  }
// =================================================

  // ACTIVATE ANIMATION OF MENUE WITH INNERWIDTH 643PX ============
  useEffect(() => {
    const watchMedia = () => {
      setmedia(window.innerWidth);
    };
    window.addEventListener("resize", watchMedia);

    if (media <= 643) {
      handleMenue();
    }
  }, []);

// ==========================================================

  return (
    <div className="Nav">
      <h3 ref={animeH2}>Davy LAMARRE</h3>
      <div ref={animeNav} className="prism">
        <div onClick={handleMenue} className=" face front ">
          <h1>Davy LAMARRE </h1>
          <li>
            <Link to="/">Acceuil</Link>
          </li>
          <li>
            <Link to="/competences">Compétence</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>

          <li>
            <Link to="/hobbies">Centres d'intérets</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </div>
        <div onClick={handleMenue} className=" face back">
          <div className="hamburger-icon">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
        <div className=" face right"></div>
        <div className=" face left"></div>
        <div className=" face bottom"></div>
        <div className=" face top"></div>
      </div>
    </div>
  );
}
