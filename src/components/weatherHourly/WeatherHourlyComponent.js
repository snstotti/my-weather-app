import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import CustomWrapper from '../helpersFunc/customWrapper/CustomWrapper';
import WeatherHourly from './WeatherHourly';
import { imageHourlyWeather } from '../weatherReducer/weatherHourleReduce';



const WeatherHourlyComponent=({hourlyData,iconHourly,imageHourlyWeather})=> {

  

  
    
  

  return (
    < >
      <CustomWrapper>
        <WeatherHourly
        hourlyData={hourlyData}
        iconHourly={iconHourly}
        getIcon = {imageHourlyWeather}
          />
      </CustomWrapper>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    hourlyData: state.weatherDailyReducer.hourlyData,
    iconHourly: state.weatherHourlyReducer.iconHourly,
  }
}


export default compose(
  connect(mapStateToProps,{imageHourlyWeather})
)(WeatherHourlyComponent)
