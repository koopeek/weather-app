import React from 'react';
import Weather from '../src/components/Weather.js';
import LocationInput from './components/LocationInput.js';
import { fetchWeather, fetchWeatherForSpecifiedCity } from './services/open-weather.js';
import 'bulma/css/bulma.min.css';

class App extends React.Component {

  constructor(props)  {
    super(props);
    this.state = {
      value: null
    }

    this.newLocation = this.newLocation.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  updateState(newValue) {
    this.setState({ value: newValue});
  }

  async componentDidMount() {
    const weatherData = await fetchWeather();
    this.updateState(weatherData);
  }

  async newLocation(value) {
    const weatherData = await fetchWeatherForSpecifiedCity(value);
    this.updateState(weatherData);
  }

  render() {
    return (
      <React.Fragment>
        <LocationInput
          onSubmit={this.newLocation}
        />
        <Weather {...this.state.value} />
      </React.Fragment>
    )
  };

}

export default App;
