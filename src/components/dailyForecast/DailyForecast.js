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
    <div key={date}>
        <div className='hourly-block__time'>
            {dat}
        </div>
        <div className='hourly-block__icon'>
           <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt='gg' />
        </div>
        <div  className='hourly-block__temp-max'>
            {maxTemperature}
        </div>
        <div  className='hourly-block__temp-min'>
            {minTemperature}
        </div>
        <div className='hourly-block__pop'>
           {round(pop)}%
        </div>
        
    </div>
   )
   })

    return (
        <div className='weather-hourly' >
            <h2>Суточный прогноз:</h2>
            <div className='hourly-block'>
                {dailyArr}
            </div>
            
            
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