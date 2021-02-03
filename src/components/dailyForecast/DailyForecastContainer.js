import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import DailyForecast from './DailyForecast';
import CustomWrapper from '../helpersFunc/customWrapper/CustomWrapper';





const DailyForecastContainer = ({dailyForecast}) => (
    <>
        <CustomWrapper>
            <DailyForecast dailyForecast={dailyForecast} />
        </CustomWrapper>
    </>
)

const mapStateToProps = (state) => {
  return {
      dailyForecast : state.weatherDailyReducer.dailyForecast
  }
}


export default compose(
  connect(mapStateToProps)
)(DailyForecastContainer)
