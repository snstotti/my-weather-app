import React from 'react';
import WeatherColumn from './WeatherColumn';
import './weatherDaily.scss'
import {numTemp} from '../weatherBriefly/weatherBriefly'
// import 'antd/dist/antd.css';


const WeatherDaily= ({
    weatherByTime,nameLocality,dailyTemp,humidity,iconUrl,pop
}) => {

    
   
    
    

    
    const {morn,day,eve,night} = dailyTemp
    

    const weatherHelper =(title,temp,humidity,urlIcon,pop)=>{

        return(
            <WeatherColumn 
                title={title}
                temp={numTemp(temp)}
                humidity={humidity}
                urlIcon={urlIcon}
                pop={pop} />
        )
    }

    let morningColumn = weatherHelper('Утро',morn,humidity,iconUrl,pop)
    let dayColumn = weatherHelper('День',day,humidity,iconUrl,pop)
    let eveColumn = weatherHelper('Вечер',eve,humidity,iconUrl,pop)
    let nightColumn = weatherHelper('Ночь',night,humidity,iconUrl,pop)
     

    return (
        <div className='weather-daily'>
            <h2>Прогноз на сегодня: {nameLocality}</h2>
            <div className='weather-daily__card'>
                {morningColumn}
                {dayColumn}
                {eveColumn}
                {nightColumn}
            </div>
            
        </div>
    )

}

export default WeatherDaily


