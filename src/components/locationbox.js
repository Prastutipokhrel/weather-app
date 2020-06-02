import React from 'react';


const LocationBox = props =>{
    return(
        <div className="location-box">
          <div className="location">{props.city},{props.country}</div>
        </div>
     );
}

export  default LocationBox;