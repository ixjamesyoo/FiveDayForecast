import { Component } from 'react';

export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      zipcode: ""
    };
    this.fetchForecast = this.fetchForecast.bind(this);
  }

  fetchForecast(e) {
    e.preventDefault();
    alert("button works!")
  }

  updateField(field) {
    return e => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  render() {
    return (
      <main>
        <form onSubmit={this.fetchForecast}>
          <h1>Awesome Weather App</h1>
          <p>A simply awesome app for simple weather needs. Get your five day forecast.</p>
          <input type="text"
            pattern="[0-9]{5}"
            value={this.state.zipcode}
            placeholder="Quick! Give me your 5-digit zipcode."
            onChange={this.updateField("zipcode")}/>
          <button>Go!</button>
        </form>
        <style jsx>{`
          form {
            box-sizing:border-box;
            width: 100%;
            height: 100vh;
            background: #cc5933;
            color: #fff;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 15px;
          }

          h1 {
            font-family: Tiempos;
            font-size: 35px;
            margin-bottom: 10px;
          }

          p {
            font-family: Apercu;
            font-size: 17px;
            margin-bottom: 20px;
          }

          input {
            border: 2px solid #fff;
            width: 60%;
            height: 50px;
          }
        `}</style>
      </main>
    );
  }
}
