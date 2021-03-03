import React from 'react';
import { numTemp } from '../helpersFunc/helpersFunc';
import { round } from '../weatherHourly/WeatherHourly';
import './dailyForecast.scss';




const DailyForecast = ({dailyForecast}) => {
    
   let dailyArr = dailyForecast.map(el=>{

    const {date,tempMin,tempMax,pop,icon} = el
    let minTemperature = numTemp(tempMin)
    let maxTemperature = numTemp(tempMax)
    let dat = setDayOfWeek(date)
   
   return(
    <li key={date} className='hourly-block__list'>
        <p className='hourly-block__time'>
            {dat}
        </p>
        <p className='hourly-block__icon'>
           <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt='gg' />
        </p>
        <p  className='hourly-block__temp-max'>
            {maxTemperature}
        </p>
        <p  className='hourly-block__temp-min'>
            {minTemperature}
        </p>
        <p className='hourly-block__pop'>
           {round(pop)}%
        </p>
        
    </li>
   )
   })

    return (
        <div className='weather-hourly' >
            <h2>Суточный прогноз:</h2>
            <ul className='hourly-block'>
                {dailyArr}
            </ul>
            
            
        </div>
    )
}

export default DailyForecast


export const setDayOfWeek = date =>{
    let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    let curentDate = new Date(date * 1000)
   let day = curentDate.getDate()
   let dayOfWeek = curentDate.getDay()
   
       
   

    return(
        `${days[dayOfWeek]} ${day}`
    )
}