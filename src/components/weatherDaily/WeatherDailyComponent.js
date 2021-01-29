import React, { useEffect } from 'react';
import { getDailyWeather,imageDailyWeather } from '../weatherReducer/weatherDailyReducer';
import { compose } from 'redux';
import { connect } from 'react-redux';
import WeatherDaily from './WeatherDaily';
import { Spin } from 'antd';


const WeatherDailyComponent=({
    getDailyWeather,
    coordinates,
    dailyTemp,
    humidity,
    nameLocality,
    pop,wind,
    imageDailyWeather,
    extraDataDaily,
    
})=> {

    const {lat,lon}=coordinates
    const {icon}=extraDataDaily

    useEffect(()=>{
        getDailyWeather(lat,lon)
        imageDailyWeather(icon)
      },[getDailyWeather,lat,lon,imageDailyWeather,icon])

      if(!icon){return <Spin tip="Loading..."/>}
 
  return (
    <div >
        <WeatherDaily
          wind={wind}
          humidity={humidity}
          dailyTemp={dailyTemp}
          pop={pop}
          nameLocality={nameLocality}
           />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    coordinates: state.weatherReducer.coordinates,
    dailyTemp: state.weatherDailyReducer.dailyTemp,
    humidity: state.weatherDailyReducer.humidity,
    pop: state.weatherDailyReducer.pop,
    extraDataDaily: state.weatherDailyReducer.extraDataDaily,
    wind: state.weatherDailyReducer.wind,
    iconDailyUrl: state.weatherDailyReducer.iconDailyUrl,
    nameLocality: state.weatherReducer.locality,
  }
}


export default compose(
  connect(mapStateToProps, { getDailyWeather,imageDailyWeather })
)(WeatherDailyComponent)
