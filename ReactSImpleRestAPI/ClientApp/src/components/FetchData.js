import React, { Component } from 'react';

export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
    super(props);
      this.state = { forecasts: [], loading: true };
  }

    async componentDidMount() {
        await this.populateWeatherData();
  }

  static renderForecastsTable(forecasts) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
                <tr>
                    <th>City</th>
                    <th>Date</th>
                    <th>TemperatureC</th>
                    <th>Feels Like C</th>
                    <th>TemperatureF</th>
                    <th>Weather</th>
                    <th>Weather Description</th>
                    <th>Country Code</th>
                    
          </tr>
        </thead>
        <tbody>
                {forecasts.map(forecast =>
                    <tr key={forecast.cityName}>
                        <td>{forecast.cityName}</td>
                        <td>{forecast.date}</td>
                        <td>{forecast.temperatureC}</td>
                        <td>{forecast.temperatureFeelsLikeC}</td>
                        <td>{forecast.temperatureF}</td>
                        <td>{forecast.weather}</td>
                        <td>{forecast.weatherDescription}</td>
                        <td>{forecast.countryCode}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchData.renderForecastsTable(this.state.forecasts);

    return (
      <div>
        <h1 id="tabelLabel" >Weather forecast</h1>
        <p>This component demonstrates fetching data from server to OpenWeather API.</p>
        {contents}
      </div>
    );
  }

  async populateWeatherData() {
      const response = await fetch('weatherforecast/SearchByCityNameAsync/taipei');
    const data = await response.json();
    this.setState({ forecasts: data, loading: false });
  }

}

