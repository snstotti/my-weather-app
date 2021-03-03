import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import WeatherCurrent from './WeatherCurrent';
import CustomWrapper from '../helpersFunc/customWrapper/CustomWrapper';






const WeatherCurrentContainer = ({detailedWeather,timeZone}) => (
    <>
        <CustomWrapper>
            <WeatherCurrent detailedWeather={detailedWeather} timeZone={timeZone} /> 
        </CustomWrapper>
    </>
)

const mapStateToProps = (state) => {
  return {
    detailedWeather:state.weatherDailyReducer.detailedWeather,
    timeZone:state.weatherDailyReducer.timeZone,
  }
}


export default compose(
  connect(mapStateToProps)
)(WeatherCurrentContainer)
