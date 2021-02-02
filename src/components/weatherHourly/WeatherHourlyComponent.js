import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import CustomWrapper from '../helpersFunc/customWrapper/CustomWrapper';
import WeatherHourly from './WeatherHourly';




const WeatherHourlyComponent=({hourlyData})=> {

  // useEffect(()=>{
  //   hourlyData
  // },[hourlyData])  

  return (
    < >
      <CustomWrapper>
        <WeatherHourly
        hourlyData={hourlyData} />
      </CustomWrapper>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    hourlyData: state.weatherDailyReducer.hourlyData,
 
  }
}


export default compose(
  connect(mapStateToProps)
)(WeatherHourlyComponent)
