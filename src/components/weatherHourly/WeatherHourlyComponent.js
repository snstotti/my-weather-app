import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import CustomWrapper from '../helpersFunc/customWrapper/CustomWrapper';
import WeatherHourly from './WeatherHourly';




const WeatherHourlyComponent=({hourlyData,timeZone})=> {

  return (
    < >
      <CustomWrapper>
        <WeatherHourly
          hourlyData={hourlyData}
          timeZone={timeZone} />
      </CustomWrapper>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    hourlyData: state.weatherDailyReducer.hourlyData,
    timeZone: state.weatherDailyReducer.timeZone,
  }
}

export default compose(
  connect(mapStateToProps)
)(WeatherHourlyComponent)
