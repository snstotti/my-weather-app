import React from 'react';
import './App.scss';
import { setLocality } from './components/weatherReducer/weatherReducer';
import { compose } from 'redux';
import { connect } from 'react-redux';
import SearchForm from './components/searchForm/SearchForm';
import WeatherBrieflyComponent from './components/weatherBriefly/WeatherBrieflyComponent';
import WeatherDailyComponent from './components/weatherDaily/WeatherDailyComponent';






function App(props) {



  const {   setLocality,locality, } = props
 
  
  

 

 
console.log(new Date(1610964000*1000));


  // текущая дата
// let date = new Date();

// час в вашем текущем часовом поясе
// let hours = date.toLocaleTimeString()

// setInterval(hours,2000)
  

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
