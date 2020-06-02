import React from 'react';


const WeatherBox =props => {
    return(
        
        <div className= 'weather-box'>
            <div className="temp">{props.temp_celsius}&deg;</div>
            <div className="weather">{props.description}</div>  
        </div>
       
    );
}

export default WeatherBox;