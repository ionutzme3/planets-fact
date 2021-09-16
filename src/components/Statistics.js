import classes from "./Statistics.module.css";

const Statistics = (props) => {
  return (
    <section className={classes.statistics} >
      <div className={classes.statistics__container}>
        <div className={classes.statistics__info}>
          <p>Rotation Time</p>
          <span>{props.rotation}</span>
        </div>
        <div className={classes.statistics__info}>
          <p>Revolution Time</p>
          <span>{props.revolution}</span>
        </div>
        <div className={classes.statistics__info}>
          <p>Radius</p>
          <span>{props.radius}</span>
        </div>
        <div className={classes.statistics__info}>
          <p>Average Temp.</p>
          <span>{props.temperature}</span>
        </div>
      </div>
    </section>
  );
};
export default Statistics;
