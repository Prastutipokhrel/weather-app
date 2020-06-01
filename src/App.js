import React from 'react';
import SearchBox from './components/searchbox';
import Calendar from './components/date';
import LocationBox from './components/locationbox';
import './App.css';
import WeatherBox from './components/weatherbox';
const api ={
  key: "94f84da264c4b6dac2de280da8afaa98",
  base: "https://api.openweathermap.org/data/2.5/"
}
function App() {

  return (
    <div className="app">
      <main>
        <SearchBox />
        <div className="location-box">
          <div className="location">Kathmandu, Nepal</div>
        <Calendar/>
        </div>
        <WeatherBox/>

      </main>
    </div>
  );
}

export default App;
