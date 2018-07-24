import { Component, Fragment } from "react";
import moment from "moment";
import DayCell from "../DayCell/day_cell";

export default class Results extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.forecast !== prevProps.forecast) {
      const results = document.getElementById("results");
      this.smoothScrollTo(results.offsetTop, 750);
    }
  }

  smoothScrollTo(destination, duration) {
    if (duration <= 0) return;
    const element = document.documentElement;
    let framesDifference = destination - element.scrollTop;
    let framesPerTick = framesDifference/duration * 10;

    setTimeout(() => {
      element.scrollTop = element.scrollTop + framesPerTick;
      if (element.scrollTop === destination) return;
      this.smoothScrollTo(destination, duration - 10);
    }, 10);
  }

  dayCells() {
    const { forecast } = this.props;
    let dayForecasts = [];
    let singleDayForecast = [];

    for (let i = 0; i < forecast.length; i++) {
      let singleResult = forecast[i];
      singleDayForecast.push(singleResult);
      let currentDay = moment(singleResult.dt_txt).day();
      let nextResult = forecast[i + 1];
      if (i === forecast.length - 1 || currentDay !== moment(nextResult.dt_txt).day()) {
        dayForecasts.push(singleDayForecast);
        singleDayForecast = [];
      }
    }

    const dayCells = dayForecasts.map((dayForecast, idx) => {
      const dayName = moment(dayForecast[0].dt_txt).format("dddd");
      return <DayCell key={idx} dayName={dayName} dayForecast={dayForecast}/>;
    });

    return dayCells;
  }

  render() {
    const { forecast, error } = this.props;
    if (!forecast || error) return null;

    const dayCells = this.dayCells();
    return (
      <section id="results">
        <div className="grid-container">
          {dayCells}
        </div>
        <style jsx>{`
          section {
            width: 100%;
            height: 100vh;
            background: #666;
            display: flex;
            align-items: center;
          }

          .grid-container {
            width: 80%;
            margin: auto;
            display: grid;
            grid-template-columns: repeat(${dayCells.length}, ${100/dayCells.length}%);
          }

          @media screen and (max-width: 992px) {
            .grid-container {
              width: 100%;
              height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              align-items: center;
            }
          }
        `}</style>
      </section>
    );
  }
}
