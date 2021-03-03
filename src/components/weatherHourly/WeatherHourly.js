import React from 'react';
import './weatherHourly.scss';
import {numTemp} from '../helpersFunc/helpersFunc'

export const round = num =>{
    let newNum = num * 100 
     return Math.round(newNum) 
 }


const WeatherHourly = ({hourlyData,timeZone}) => {
    
    
  
   let hour = hourlyData.map(el=>{
       const {date,temperature,pop,icon} = el
        let temp = numTemp(temperature)
       let time = new Date((date + (timeZone)) * 1000)
       let clock = time.toLocaleTimeString('en-GB',{timeZone: 'UTC'}).slice(0,-3)
       
       return(
        <li key={date} className='hourly-block__list'>
            <p className='hourly-block__time'>
                {clock}
            </p>
            <p className='hourly-block__icon'>
               <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt='gg' />
            </p>
            <p  className='hourly-block__temp'>
                {temp}
            </p>
            <p className='hourly-block__pop'>
               {round(pop)}%
            </p>
            
        </li>
       )
   })

    return (
        <div className='weather-hourly'>
             <h2>Почасовой прогноз:</h2>
             <ul className='hourly-block'>
                {hour}
             </ul>
            
        </div>
    )
}

export default WeatherHourly


