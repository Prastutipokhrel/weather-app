import React from 'react';
import SearchBox from './components/searchbox';
import Calendar from './components/date';
import Background from './components/background';
import LocationBox from './components/locationbox';
import './App.css';
import WeatherBox from './components/weatherbox';

//api call api.openweathermap.org/data/2.5/weather?q=London,uk
const API_key = "429736441cf3572838aa10530929f7cd";
 

class App extends React.Component{
  constructor(){
    super();
    this.state={
      city: undefined,
      country:undefined,
      icon:undefined,
      main:undefined,
      celsius:undefined,
      description:undefined,
      temp:undefined,
      error:false
    }; 
    this.getWeather();

    this.weatherIcon ={
      Thunderstorm:"rain",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "cold",
      Atmosphere: "wi-fog",
      Clear: "warm",
      Clouds: "cloud"
    };
  }

  calCelsius(temp){
    let cell=Math.floor(temp-273.15);
    return cell;
  }
  get_WeatherIcon(icons,rangeId){
    switch(true){
      case rangeId>=200 && rangeId<=232:
        this.setState({background:this.background.Thunderstorm});
            break;
          case rangeId >= 300 && rangeId <= 321:
            this.setState({ icon: icons.Drizzle });
            break;
          case rangeId >= 500 && rangeId <= 521:
            this.setState({ icon: icons.Rain });
            break;
          case rangeId >= 600 && rangeId <= 622:
            this.setState({ icon: icons.Snow });
            break;
          case rangeId >= 701 && rangeId <= 781:
            this.setState({ icon: icons.Atmosphere });
            break;
          case rangeId === 800:
            this.setState({ icon: icons.Clear });
            break;
          case rangeId >= 801 && rangeId <= 804:
            this.setState({ icon: icons.Clouds });
            break;
          default:
            this.setState({ icon: icons.Clouds });
      
    }
  }
  //creating method and placing the data synchronously

  getWeather= async()=>{
    //fetching calling the api and concatenating api key
    const api_call= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_key}`);  
    const response=await api_call.json(); //changes all the data in json format
    console.log(response);
    this.setState({
        city:`${response.name}`,
        country:`${response.sys.country}`,
        celsius:this.calCelsius(response.main.temp),
        description: response.weather[0].description

    });
     // seting icons
     this.get_WeatherIcon(this.weatherIcon, response.weather[0].id);
     
  }

  render (){
   return( 
     <div className={` ${this.state.icon}`}>
         
        <main>
            <SearchBox />
            <Calendar/>
            <LocationBox city={this.state.city} country={this.state.country} />
            <WeatherBox temp_celsius={this.state.celsius} 
              description={this.state.description}/>

        </main>
      </div>  
    );
  }
  
}
export default App;
