import { Component, Fragment } from "react";
import moment from "moment";
import DayCell from "../DayCell/day_cell";

export default class Results extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.forecast !== prevProps.forecast) {
      const results = document.getElementById("results");
      this.smoothScrollTo(document.documentElement, results.offsetTop, 800);
    }
  }

  smoothScrollTo(element, to, duration) {
    if (duration <= 0) return;
    let difference = to - element.scrollTop;
    let perTick = difference/ duration * 10;

    setTimeout(() => {
      element.scrollTop = element.scrollTop + perTick;
      if (element.scrollTop === to) return;
      this.smoothScrollTo(element, to, duration - 10);
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
            display:grid;
            grid-template-columns: repeat(${dayCells.length}, ${100/dayCells.length}%);
          }
        `}</style>
      </section>
    );
  }
}
