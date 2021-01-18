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
    hourlyTemp,
    iconMorn
})=> {

    const {lat,lon}=coordinates

    useEffect(()=>{
        getDailyWeather(lat,lon)
      },[getDailyWeather,lat,lon])
      

    // console.log(1610953200);
 
  return (
    <div >
      
        <WeatherDaily
          iconMorn={iconMorn}
         
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
    iconMorn: state.weatherDailyReducer.iconMorn,
  }
}


export default compose(
  connect(mapStateToProps, { getDailyWeather })
)(WeatherDailyComponent)
