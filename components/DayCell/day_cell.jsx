import React from "react";

export default ({ dayName, dayForecast }) => {
  if (!dayForecast) return null;
  const tempArray = dayForecast.map(result => result.main.temp);
  const averageTemp = tempArray.reduce((acc,val) => acc + val, 0)/tempArray.length;

  return (
    <div>
      <h3>{dayName}</h3>
      <p><span>{Math.round(averageTemp)}</span> F</p>
      <style jsx>{`
        div {
          color: #f2f2f2;
          font-family: Apercu;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border: 1px solid #f2f2f2;
          margin: 0 5px;
          max-width: 150px;
        }

        h3 {
          width: 100%;
          box-sizing: border-box;
          padding: 10px 0;
          text-align: center;
          border-bottom: 1px solid #f2f2f2;
        }

        p {
          padding: 18px 0;
        }

        span {
          font-family: Tiempos;
          font-size: 40px;
        }

        @media screen and (max-width: 992px) {
          div {
            height: 15%;
            flex-direction: row;
            max-width: none;
            width: 60%;
          }

          h3 {
            width: 50%;
            height: 100%;
            padding: 0;
            border-right: 1px solid #f2f2f2;
            border-bottom: none;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          p {
            padding: 0;
            width: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          span {
            margin-right: 5px;
          }
        }
      `}</style>
    </div>
  );
};
