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
    pop,
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

      if(!icon){return <Spin tip="Loading..."/>}
 
  return (
    <div >
        <WeatherDaily
          iconUrl={iconDailyUrl}
          humidity={humidity}
          dailyTemp={dailyTemp}
          pop={pop}
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
    iconDailyUrl: state.weatherDailyReducer.iconDailyUrl,
  }
}


export default compose(
  connect(mapStateToProps, { getDailyWeather,imageDailyWeather })
)(WeatherDailyComponent)
