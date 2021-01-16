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
    temperature
})=> {

   const {humidity} =temperature
    const {lat,lon}=coordinates

    useEffect(()=>{
        getDailyWeather(lat,lon)
      },[getDailyWeather,lat,lon])
 
 

 
  return (
    <div >

        <WeatherDaily
          humidity={humidity}
          dailyTemp={dailyTemp}
          onLoading={onLoading}
          urlIcon={urlIcon}
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
  }
}


export default compose(
  connect(mapStateToProps, { getDailyWeather })
)(WeatherDailyComponent)
