import React from "react";

export default ({ dayName, dayForecast }) => {
  if (!dayForecast) return null;
  const tempArray = dayForecast.map(result => result.main.temp);
  const averageTemp = tempArray.reduce((acc,val) => acc + val, 0)/tempArray.length;

  return (
    <div>
      <h3>{dayName}</h3>
      <p>{Math.round(averageTemp)}</p>
    </div>
  );
};
