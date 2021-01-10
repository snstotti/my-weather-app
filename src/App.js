import React, { useEffect } from 'react';
import './App.css';
import { getExtraData, getIconUrl, setLocality } from './components/weatherReducer/weatherReducer';
import { compose } from 'redux';
import { connect } from 'react-redux';
import SearchForm from './components/searchForm/SearchForm';
import WeatherBriefly from './components/weatherBriefly/weatherBriefly';




function App(props) {



  const {  temperature, extraData, setLocality,locality,getExtraData,getIconUrl,urlIcon,nameLocality,onError } = props

  const { temp, feels_like, humidity } = temperature
  const { description, icon } = extraData

  useEffect(() => {
    getIconUrl(icon)
    getExtraData(locality)
  }, [locality,getExtraData,icon,getIconUrl])

 

  

  

  return (
    <div className="app">
      <header className="app__header">
        DATE
      </header>
      
      <main className="app__main">
      <SearchForm setLocality={setLocality} locality={locality} />
          <WeatherBriefly 
            urlIcon={urlIcon}
            onError={onError}
            nameLocality={nameLocality}
            description={description}
            feels_like={feels_like}
            humidity={humidity}
            temp={temp} />
      
        
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
    onError: state.weatherReducer.onError,
  }
}


export default compose(
  connect(mapStateToProps, { getExtraData,getIconUrl, setLocality })
)(App)
