import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { getTemp, getData } from './components/weatherReducer/weatherReducer';
import { compose } from 'redux';
import { connect } from 'react-redux';

// let a :number | null = 2 //или
// let b :Boolean = true 
// let c :string = 'string'

// let gender : 'man' | 'woman' 
// gender = 'man' //строка как тип

// let d :Array<string> = ['g','sds','uuf'] //массив строк


function App(props:any) {



const {getTemp,getData,temperature,extraData} = props

const {temp,feels_like,humidity} = temperature
const {description} = extraData



useEffect(()=>{
  getData('Тольятти')
  getTemp('Тольятти')
},[getTemp,getData])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Температура воздуха: {temp}
        </p>
        <span>{description}</span>
        <span>{}</span>
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

const mapStateToProps=(state:any)=>{
  return {
    temperature: state.weatherReducer.temperature,
    extraData: state.weatherReducer.extraData,
  }
}


export default compose(
  connect(mapStateToProps,{getTemp,getData})
)(App)
