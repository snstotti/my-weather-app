import React, { useEffect } from 'react';
import { getDailyWeather } from '../weatherReducer/weatherDailyReducer';
import { compose } from 'redux';
import { connect } from 'react-redux';
import WeatherDaily from './WeatherDaily';



const WeatherDailyComponent=({
    getDailyWeather,
    coordinates,
    onLoading,
    dailyTemp,
    urlIcon,
    temperature,
    weatherByTime,
    hourly,
    nameLocality
})=> {

    const {lat,lon}=coordinates
    
    

    useEffect(()=>{
        getDailyWeather(lat,lon)
      },[getDailyWeather,lat,lon])
      

      console.log(weatherByTime);
 
  return (
    <div >
        
        <WeatherDaily
          temperature={temperature}
          dailyTemp={dailyTemp}
          weatherByTime={weatherByTime}
          nameLocality={nameLocality}
           />
            
      
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    coordinates: state.weatherReducer.coordinates,
    onError: state.weatherReducer.onError,
    onLoading: state.weatherReducer.onLoading,
    dailyTemp: state.weatherDailyReducer.dailyTemp,
    urlIcon: state.weatherReducer.imageUrl,
    temperature: state.weatherReducer.temperature,
    hourlyTemp: state.weatherDailyReducer.hourlyTemp,
    weatherByTime: state.weatherDailyReducer.weatherByTime,
    nameLocality: state.weatherReducer.nameLocality
  }
}


export default compose(
  connect(mapStateToProps, { getDailyWeather })
)(WeatherDailyComponent)
