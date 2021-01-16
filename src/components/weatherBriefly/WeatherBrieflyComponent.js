import React, { useEffect } from 'react';
import { getExtraData, getIconUrl, setLocality, } from '../../components/weatherReducer/weatherReducer';
import { compose } from 'redux';
import { connect } from 'react-redux';
import WeatherBriefly from './weatherBriefly';


const WeatherBrieflyComponent=({
    temperature,
     extraData,
      locality,
      getExtraData,
      getIconUrl,
      urlIcon,
      nameLocality,
      onError
})=> {

  const { description, icon } = extraData
 
 
  useEffect(() => {
    getIconUrl(icon)
    getExtraData(locality)
  }, [locality,getExtraData,icon,getIconUrl])
 
  return (
    <div >

        <WeatherBriefly
          urlIcon={urlIcon}
          onError={onError}
          nameLocality={nameLocality}
          description={description}
          temperature={temperature} />   
      
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    locality: state.weatherReducer.locality,
    temperature: state.weatherReducer.temperature,
    extraData: state.weatherReducer.extraData,
    urlIcon: state.weatherReducer.imageUrl,
    nameLocality: state.weatherReducer.nameLocality,
    onError: state.weatherReducer.onError,
    onLoading: state.weatherReducer.onLoading,
  }
}


export default compose(
  connect(mapStateToProps, { getExtraData,getIconUrl, setLocality })
)(WeatherBrieflyComponent)
