import React from 'react';
import WeatherColumn from './WeatherColumn';
import './weatherDaily.scss'
import {numTemp} from '../weatherBriefly/weatherBriefly'
// import 'antd/dist/antd.css';


const WeatherDaily= ({
    dailyTemp
}) => {

    

    

    
    const column = dailyTemp.map(el=>{
        return(
            <WeatherColumn 
                    title={el.title}
                    humidity={el.humidity}
                    temp={numTemp(el.temp)}
                    urlIcon={el.icon} />
        )
    })
   
    return (
        <div className='weather-daily'>
            <h2>Прогноз на сегодня: Props</h2>
            <div className='weather-daily__card'>
                {column}
            </div>
            
        </div>
    )

}

export default WeatherDaily


