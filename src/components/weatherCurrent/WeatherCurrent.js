import { Spin } from 'antd';

import React from 'react';
import { numTemp } from '../helpersFunc/helpersFunc';



export const setSun = (date, timeZone) =>{
    let time = new Date((date + (timeZone)) * 1000)
    // if(!date && !timeZone) return <Spin />
    return time.toLocaleTimeString('en-GB',{timeZone: 'UTC'}).slice(0,-3)
}


const WeatherCurrent = ({detailedWeather,timeZone}) => {
   
    
    const { feels_like, pressure, humidity, dew_point, uvi, clouds, wind_speed, sunrise, sunset } = detailedWeather

    let sun = (
        <p style={{color:'white'}}>
            Восход: {setSun(sunrise, timeZone)} / Заход: {setSun(sunset, timeZone)}
        </p>)
    let paragraph = (!timeZone) ? <Spin /> : sun

    return (
        <div className='weather-current'>
            <h2>Погода на сегодня:</h2>
            <div>
                {paragraph}
            </div>
            <div className='weather-current__list'>
                <ul className='weather-current__item'>
                    {itemListRender('По ощущению', numTemp(feels_like))}
                    {itemListRender('Давление', pressure)}
                    {itemListRender('Влажность', humidity)}
                    {itemListRender('Точка росы', numTemp(dew_point) )}
                </ul>
                <ul className='weather-current__item'>
                    {itemListRender('Ультрафиолетовый индекс', uvi)}
                    {itemListRender('Облачность', clouds)}
                    {itemListRender('Скорость Ветра', wind_speed)}
                    <li></li>
                </ul>
            </div>
        </div>
    )
    
}

export default WeatherCurrent


const itemListRender = (title,elem)=>{
    let sign
    if(title === 'Влажность'){
        sign = '%'
    } else if(title === 'Скорость Ветра'){
        sign = 'м/с'
    }else{sign=''}

    
    return(
        <li>{title}:  <span>{elem} {sign}</span></li>
    )
}