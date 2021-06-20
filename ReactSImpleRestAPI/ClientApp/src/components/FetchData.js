import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
          <div>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
    </Card.Text>
                      <Container>
                          <Row>
                              <Col>1 of 3</Col>
                              <Col xs={6}>2 of 3 (wider)</Col>
                              <Col>3 of 3</Col>
                          </Row>
                          <Row>
                              <Col>1 of 3</Col>
                              <Col xs={5}>2 of 3 (wider)</Col>
                              <Col>3 of 3</Col>
                          </Row>
                      </Container>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
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
              </div>
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

