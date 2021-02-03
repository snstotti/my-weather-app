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
        <div key={date}>
            <div className='hourly-block__time'>
                {clock}
            </div>
            <div className='hourly-block__icon'>
               <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt='gg' />
            </div>
            <div  className='hourly-block__temp'>
                {temp}
            </div>
            <div className='hourly-block__pop'>
               {round(pop)}%
            </div>
            
        </div>
       )
   })

    return (
        <div className='weather-hourly'>
             <h2>Почасовой прогноз:</h2>
             <div className='hourly-block'>
                {hour}
             </div>
            
        </div>
    )
}

export default WeatherHourly


