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

  

  const { setLocality } = props

  return (
    <div className='wrapper'>
      <header className="header">
        <Header />
      </header>
      <div className="app">
        <main className="app__main">
          <SearchForm setLocality={setLocality} />
          <WeatherBrieflyComponent />
          <WeatherCurrentContainer />
          <WeatherDailyComponent />
          <WeatherHourlyComponent />
          <DailyForecastContainer />
        </main>
       
      </div>
      <footer>
          <Footer />
        </footer>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {

  }
}


export default compose(
  connect(mapStateToProps, { setLocality })
)(App)
