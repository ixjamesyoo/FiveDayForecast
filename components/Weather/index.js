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
          <input type="text"
            pattern="[0-9]{5}"
            value={this.state.zipcode}
            placeholder="Quick! Give me your 5-digit zipcode."
            onChange={this.updateField("zipcode")}/>
          <input type="submit"/>
        </form>
        <div>

        </div>
        <style jsx>{`
          form {
            width: 100%;
            height: 100vh;
            background: grey;
          }

          h1 {
            color: black;
          }
        `}</style>
      </main>
    );
  }
}
