import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { getTemp,getExtraData, setLocality,getIconUrl } from './components/weatherReducer/weatherReducer';
import { compose } from 'redux';
import { connect } from 'react-redux';
import SearchForm from './components/searchForm/SearchForm';

// let a :number | null = 2 //или
// let b :Boolean = true 
// let c :string = 'string'

// let gender : 'man' | 'woman' 
// gender = 'man' //строка как тип

// let d :Array<string> = ['g','sds','uuf'] //массив строк


function App(props) {



  const { getTemp, temperature, extraData, setLocality,locality,getExtraData,getIconUrl,urlIcon } = props

  const { temp, feels_like, humidity } = temperature
  const { description, icon } = extraData



  useEffect(() => {
    getIconUrl(icon)
    getExtraData(locality)
    getTemp(locality)
  }, [getTemp,getExtraData,getIconUrl,locality,icon])

  return (
    <div className="App">
      <header className="App-header">
        <SearchForm setLocality={setLocality} />
        <img src={urlIcon} className="App-logo" alt="logo" />
        <div>
          {locality}
        </div>
        <p>
          Температура воздуха: {temp}
        </p>
        <span>{description}</span>
        <span></span>
        <p>
          Ощущается как: {feels_like}
        </p>
        <p>
          Влажность: {humidity}%
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    locality: state.weatherReducer.locality,
    temperature: state.weatherReducer.temperature,
    extraData: state.weatherReducer.extraData,
    urlIcon: state.weatherReducer.imageUrl,
  }
}


export default compose(
  connect(mapStateToProps, { getTemp,getExtraData,getIconUrl,  setLocality })
)(App)
