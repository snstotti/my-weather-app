import React, { useEffect } from 'react';
import './App.css';
import { getExtraData, getIconUrl, setLocality } from './components/weatherReducer/weatherReducer';
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



  const {  temperature, extraData, setLocality,locality,getExtraData,getIconUrl,urlIcon,nameLocality,onError } = props

  const { temp, feels_like, humidity } = temperature
  const { description, icon } = extraData

  useEffect(() => {
    getIconUrl(icon)
    getExtraData(locality)
  }, [locality,getExtraData,icon,getIconUrl])

  // useEffect(()=>{
    
  //   getIconUrl(icon)
  // },[getIconUrl,icon])

  

  let image = urlIcon ? <img src={urlIcon} className="App-logo" alt="logo" /> : '...Loading'

  return (
    <div className="app">
      <header className="app__header">
        DATE
      </header>
      <main className="app__main">
      <SearchForm setLocality={setLocality} locality={locality} />
        {image}
        <div>
          {!onError ? nameLocality : 'Нет такого города'}
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
