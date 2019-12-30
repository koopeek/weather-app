import React from 'react';

const WeatherIcon = ({ iconId } ) => {
    return(
        <img alt="weather icon" src={`http://openweathermap.org/img/wn/${iconId}.png`}/>
    );
};

export default WeatherIcon;