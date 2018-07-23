import { Fragment } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons';
import Spinner from "../Spinner/spinner";

library.add(faLongArrowAltDown);

export default ({ zipcode, updateZipcode, fetchForecast, loading}) => {
  const loadingUI = loading ? <Spinner/> : null;

  return (
    <Fragment>
      <form onSubmit={fetchForecast}>
        <h1>Awesome Weather App</h1>
        <p>A simply awesome app for simple weather needs. Get your five day forecast.</p>
        <div>
          <input type="text"
            pattern="[0-9]{5}"
            value={zipcode}
            placeholder="Quick! Give me your 5-digit zipcode."
            onChange={updateZipcode}/>
          {loadingUI}
        </div>
        <button><FontAwesomeIcon icon="long-arrow-alt-down" size="3x"/></button>
      </form>
      <style jsx>{`
        form {
          width: 100%;
          height: 100vh;
          color: #f2f2f2;
          background: #cc5933;
          box-sizing: border-box;
          padding-left: 45px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        h1 {
          font-family: Tiempos;
          font-size: 35px;
          margin-bottom: 10px;
        }

        p {
          font-family: Apercu;
          font-size: 16px;
          margin-bottom: 20px;
        }

        input {
          border: 2px solid #f2f2f2;
          width: 500px;
          height: 50px;
          padding-left: 20px;
          color: #f2f2f2;
          font-family: Apercu;
          font-size: 22px;
        }

        input::placeholder {
          color: rgba(192,192,192,0.4);
        }

        button {
          color: #f2f2f2;
          margin-top: 15px;
        }

        div {
          display: flex;
        }
      `}</style>
    </Fragment>
  );
};
