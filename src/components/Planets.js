import { useState } from "react";
import Lists from "./Lists";
import classes from "./Planets.module.css";
import qa from "./qa";

const Planets = (props) => {
  const [content, setContent] = useState(true);
  const [structure, setStructure] = useState(false);
  const [surface, setSurface] = useState(false);
  const [overviewImage, setOverviewImage] = useState(true);
  const [internalImage, setInternalImage] = useState(false);
  const [surfaceImage, setSurfaceImage] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(-1);



  const structureContent = () => {
    setContent(false);
    setStructure(true);
    setOverviewImage(false);
    setInternalImage(true);
    setSurfaceImage(false);
  };

  const overviewContent = () => {
    setContent(true);
    setStructure(false);
    setInternalImage(false);
    setOverviewImage(true);
    setSurfaceImage(false);
  };

  const surfaceContent = () => {
    setContent(false);
    setStructure(false);
    setSurface(true);
    setSurfaceImage(true);
    setOverviewImage(true);
    setInternalImage(false);
  };

  const handleChange = (i) => {
    setCurrentIndex(i);
    if (i === 0) {
      overviewContent();
    } else if (i === 1) {
      structureContent();
    } else {
      surfaceContent();
    }
  };

  return (
    <section className={classes.planets}>
      <div className={classes.planets__content}>
        <div className={classes.planets__content__image}>
          {overviewImage && <img src={props.planet} alt="planet" />}
          {internalImage && <img src={props.internal} alt="planet" />}
          {surfaceImage && (
            <img
              className={classes.surface__geology}
              src={props.geology}
              alt="planet"
            />
          )}
        </div>
        <div className={classes.overview}>
          <h1>{props.planetName}</h1>
          <p>
            {content && props.content}
            {structure && props.structure}
            {surface && props.surface}
          </p>
          <p>
            Source :
            <a href="https://en.wikipedia.org/wiki/Mercury_(planet)">
              Wikipedia
            </a>
            <img src="assets/icon-source.svg" alt="" />
          </p>
        </div>
        <div className={classes["overview-nav"]}>
          <ul>
            {qa.map((e, i) => (
              <Lists
                span={e.span}
                text={e.text}
                handleChange={handleChange}
                key={i}
                index={i}
                currentIndex={currentIndex}
              />
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Planets;
