import React from 'react';
import WeatherIcon from '../components/WeatherIcon.js';

const WeatherDetails = ({ temperature, humidity, windSpeed, cloudiness, iconId }) => {

    return (
        <div className="columns is-vcentered">
            <div className="column weather-column">
                <WeatherIcon iconId={iconId}/>
                <div className="temperature-label"> {temperature}°C</div>
            </div>
            <div className="column">
                <ul>
                    <li>Wilgotność: {humidity}%</li>
                    <li>Wiatr: {windSpeed} km/h</li>
                    <li>Zachmurzenie: {cloudiness}%</li>
                </ul>
            </div>
        </div>      
    );

};

export default WeatherDetails;