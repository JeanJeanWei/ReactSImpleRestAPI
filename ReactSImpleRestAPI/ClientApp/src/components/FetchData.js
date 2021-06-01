import React, { Component } from 'react';

export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
    super(props);
    this.state = { forecasts: [], loading: true };
  }

    componentDidMount() {
        
    this.populateWeatherData();
  }

  static renderForecastsTable(forecasts) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Name</th>
            <th>R</th>
            <th>G</th>
            <th>B</th>
            <th>Hex</th>
            <th>Distance</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map(forecast =>
            <tr key={forecast.date}>
              <td>{forecast.Name}</td>
              <td>{forecast.R}</td>
              <td>{forecast.G}</td>
              <td>{forecast.B}</td>
              <td>{forecast.Hex}</td>
              <td>{forecast.Distance}</td>
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
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

  async populateWeatherData() {
      const response = await fetch("/color/allcolordata");
    const data = await response.json();
    this.setState({ forecasts: data, loading: false });
  }
    

}
