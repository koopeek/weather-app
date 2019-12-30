import React from 'react';
import WeatherDetails from './WeatherDetails';

const Weather = (props) => {

    return(
        <section className="section">
            <div className="container">
                <div className="tile is-vertical is-6 notification is-info">
                    <h1 className="title">{props.city}</h1>
                    <WeatherDetails {...props}/>
                </div>
            </div>
        </section>
    )
};


export default Weather;