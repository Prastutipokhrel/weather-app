import React from 'react';


const WeatherBox =({temp,weather}) => {
    return(

        <div className= 'weather-box'>
            <div className="temp">temp</div>
            <div className="weather">weather</div>  
        </div>
       
    );
}

export default WeatherBox;