import React, { useRef, useEffect } from "react";
import { dataPortfolio } from "../dataPortfolio";
import "../styles/Portfolio.scss";
import { gsap } from "gsap";

export default function Portfolio() {
  const animeTile = useRef(null);
  const animeProject = useRef(null);

  useEffect(() => {
    gsap.from(animeTile.current, {
      duration: 1,
      autoAlpha: -1,
      x: -300,
      ease: "expo.out",
    });
    gsap.from(animeProject.current.children, {
      scale: 0,
      x: 100,
      ease: "expo.Out",
      stagger: 0.2,
    });
  }, []);

  return (
    <div className="Portfolio">
      <h2 ref={animeTile}>Portfolio</h2>
      <div ref={animeProject} className="list-project">
        {dataPortfolio.map((project) => (
          <div key={project.id} className="project">
            <img src={project.thumbnail} alt="thumbnail" />
            <a
              className="site"
              href={project.url}
              target="_blank"
              rel="noreferrer"
            >
              Visiter le site
            </a>
            <a
              className="code-source"
              href={project.codeSource}
              target="_blank"
              rel="noreferrer"
            >
              Code source
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
