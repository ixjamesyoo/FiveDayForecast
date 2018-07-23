import { Component } from 'react';
import Form from "../ZipcodeForm/form";

export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      zipcode: "",
      forecast: null
    };
    this.fetchForecast = this.fetchForecast.bind(this);
  }

  async fetchForecast(e) {
    e.preventDefault();
    alert("button works!");
    this.setState({ loading: true })
    let response = await fetch("http://api.openweathermap.org/data/2.5/forecast?zip=11377,us&units=imperial&APPID=44f4535725b6a9b8503b5fd0c49526a6")
    let forecast = response.json();
    this.setState({ forecast });
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
        fetchForecast={this.fetchForecast}/>
      </main>
    );
  }
}
