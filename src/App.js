import React from 'react';
import './App.scss';
import { setLocality } from './components/weatherReducer/weatherReducer';
import { compose } from 'redux';
import { connect } from 'react-redux';
import SearchForm from './components/searchForm/SearchForm';
import WeatherBrieflyComponent from './components/weatherBriefly/WeatherBrieflyComponent';
import WeatherDailyComponent from './components/weatherDaily/WeatherDailyComponent';
// import { hot } from 'react-hot-loader'






function App(props) {



  const {   setLocality,locality, } = props

  console.log(new Date(1611684000*1000));

  return (
    <div className="app">
      <header className="app__header">
        {/* DATE {hours} */}
      </header>
      
      <main className="app__main">
        <SearchForm setLocality={setLocality} locality={locality} />

        <WeatherBrieflyComponent/>
        <WeatherDailyComponent />
          
      </main>
        
      
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    nameLocality: state.weatherReducer.nameLocality,
    
    
  }
}


export default compose(
  
  connect(mapStateToProps, { setLocality })
)(App)
