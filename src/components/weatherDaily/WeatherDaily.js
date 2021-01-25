import React from 'react';
import WeatherColumn from './WeatherColumn';
import './weatherDaily.scss'
import {numTemp} from '../weatherBriefly/weatherBriefly'
// import 'antd/dist/antd.css';


const WeatherDaily= ({
    weatherByTime,nameLocality,dailyTemp,temperature,iconUrl
}) => {

    
   
    
    

    const {humidity}=temperature
    const {morn,day,eve,night} = dailyTemp
    const {m,d,e,n} = weatherByTime
    
    

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

    // let morningColumn = weatherHelper('Утро',morn,humidity,m.weather[0].icon,0)
    let nightColumn = weatherHelper('Ночь',night,humidity,iconUrl,0.10)
     
    
    // const column = hourlyTemp.map((el)=>{
    //     let newTitle
    //     let d = new Date(el.dt*1000)
    //     let curentHours = d.getHours()
    //     if(curentHours >= 6 && curentHours < 11){newTitle = 'Утро'}
    //     if(curentHours >= 11 && curentHours < 16){newTitle = 'День'}
    //     if(curentHours > 16 && curentHours < 20){newTitle = 'Вечер'}
    //     if(curentHours > 21 ){newTitle = 'Ночь'}

    //     return(
            
    //         <WeatherColumn 
    //             key={el.dt}
                
    //             title={newTitle}
    //             humidity={el.humidity}
    //             temp={numTemp(el.temp)}
    //             urlIcon={el.weather[0].icon}
    //             pop={el.pop} />
    //     )
    // })

    return (
        <div className='weather-daily'>
            <h2>Прогноз на сегодня: {nameLocality}</h2>
            <div className='weather-daily__card'>
                {nightColumn}
            </div>
            
        </div>
    )

}

export default WeatherDaily


