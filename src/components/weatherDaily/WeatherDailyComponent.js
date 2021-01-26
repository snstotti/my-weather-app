import React, { useEffect } from 'react';
import { getDailyWeather,imageDailyWeather } from '../weatherReducer/weatherDailyReducer';
import { compose } from 'redux';
import { connect } from 'react-redux';
import WeatherDaily from './WeatherDaily';



const WeatherDailyComponent=({
    getDailyWeather,
    coordinates,
    onLoading,
    dailyTemp,
    humidity,
    pop,
    weatherByTime,
    nameLocality,
    imageDailyWeather,
    extraDataDaily,
    iconDailyUrl
})=> {

    const {lat,lon}=coordinates
    const {icon}=extraDataDaily
    
    

    useEffect(()=>{
        getDailyWeather(lat,lon)
        imageDailyWeather(icon)
      },[getDailyWeather,lat,lon,imageDailyWeather,icon])
      
 
  return (
    <div >
        
        <WeatherDaily
          iconUrl={iconDailyUrl}
          humidity={humidity}
          dailyTemp={dailyTemp}
          pop={pop}
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
    humidity: state.weatherDailyReducer.humidity,
    pop: state.weatherDailyReducer.pop,
    hourlyTemp: state.weatherDailyReducer.hourlyTemp,
    weatherByTime: state.weatherDailyReducer.weatherByTime,
    extraDataDaily: state.weatherDailyReducer.extraDataDaily,
    iconDailyUrl: state.weatherDailyReducer.iconDailyUrl,
    nameLocality: state.weatherReducer.nameLocality,
  }
}


export default compose(
  connect(mapStateToProps, { getDailyWeather,imageDailyWeather })
)(WeatherDailyComponent)
