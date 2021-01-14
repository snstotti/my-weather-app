import React, { useEffect } from 'react';
import './App.scss';
import { getExtraData, getIconUrl, setLocality, getDailyWeather } from './components/weatherReducer/weatherReducer';
import { compose } from 'redux';
import { connect } from 'react-redux';
import SearchForm from './components/searchForm/SearchForm';
import WeatherBriefly from './components/weatherBriefly/weatherBriefly';





function App(props) {



  const {  temperature, extraData, setLocality,locality,getExtraData,getIconUrl,urlIcon,nameLocality,onError } = props
  const {getDailyWeather, coordinates} = props
  
  const { description, icon } = extraData
  const {lat,lon}=coordinates
 
  useEffect(() => {
    getIconUrl(icon)
    getExtraData(locality)
  }, [locality,getExtraData,icon,getIconUrl])
 
console.log(new Date(1610697600*1000));

  useEffect(()=>{
    getDailyWeather(lat,lon)
  },[getDailyWeather,lat,lon])

  // текущая дата
let date = new Date();

// час в вашем текущем часовом поясе
let hours = date.toLocaleTimeString()


  

  return (
    <div className="app">
      <header className="app__header">
        DATE {hours}
      </header>
      
      <main className="app__main">
        <SearchForm setLocality={setLocality} locality={locality} />

        <WeatherBriefly
          urlIcon={urlIcon}
          onError={onError}
          nameLocality={nameLocality}
          description={description}
          temperature={temperature} />
      </main>
        
      
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
    coordinates: state.weatherReducer.coordinates,
    onError: state.weatherReducer.onError,
  }
}


export default compose(
  connect(mapStateToProps, { getExtraData,getIconUrl, setLocality, getDailyWeather })
)(App)
