import { Fragment } from "react";
import moment from "moment";
import DayCell from "../DayCell/day_cell";

export default ({ forecast, error }) => {
  if (!forecast || error) return null;

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
  }
  );

  return (
    <section>
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
};
