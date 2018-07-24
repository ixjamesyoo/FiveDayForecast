import { Component } from 'react';
import Form from "../ZipcodeForm/form";
import Results from "../Results/results";

export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      zipcode: "",
      forecast: null,
      error: false
    };
    this.fetchForecast = this.fetchForecast.bind(this);
  }

  async fetchForecast(e) {
    e.preventDefault();
    if (!this.state.zipcode) {
      alert("Please enter zipcode!")
    } else {
      this.setState({ loading: true, error: false });
      let response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${this.state.zipcode},us&units=imperial&APPID=44f4535725b6a9b8503b5fd0c49526a6`)
      if (!response.ok){
        this.setState({ loading: false, error: true });
      } else {
        let forecast = await response.json();
        this.setState({ forecast: forecast.list, loading: false });
      }
    }
  }

  updateField(field) {
    return e => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  render() {
    return (
      <main>
        <Form zipcode={this.state.zipcode}
        loading={this.state.loading}
        updateZipcode={this.updateField("zipcode")}
        fetchForecast={this.fetchForecast}
        error={this.state.error}/>
      <Results forecast={this.state.forecast} error={this.state.error}/>
      </main>
    );
  }
}
