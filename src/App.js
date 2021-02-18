import React from 'react';
import './App.scss';
import { setLocality } from './components/weatherReducer/weatherReducer';
import { compose } from 'redux';
import { connect } from 'react-redux';
import SearchForm from './components/searchForm/SearchForm';
import WeatherBrieflyComponent from './components/weatherBriefly/WeatherBrieflyComponent';
import WeatherDailyComponent from './components/weatherDaily/WeatherDailyComponent';
import WeatherHourlyComponent from './components/weatherHourly/WeatherHourlyComponent';
import DailyForecastContainer from './components/dailyForecast/DailyForecastContainer';
import WeatherCurrentContainer from './components/weatherCurrent/WeatherCurrentContainer';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';



const App=(props)=> {

  

  const {   setLocality,locality, hourlyData, timeZone} = props

  return (
    <div className="app">
      <header className="app__header">
        <Header hourlyData={hourlyData} timeZone={timeZone} />
      </header>
      
      <main className="app__main">
        <SearchForm setLocality={setLocality} locality={locality} />
        
        <WeatherBrieflyComponent/>
        <WeatherCurrentContainer/>
        <WeatherDailyComponent />
        <WeatherHourlyComponent />
        <DailyForecastContainer />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    nameLocality: state.weatherReducer.nameLocality,
    hourlyData: state.weatherDailyReducer.hourlyData,
    timeZone: state.weatherDailyReducer.timeZone,
  }
}


export default compose(
  
  connect(mapStateToProps, { setLocality })
)(App)
