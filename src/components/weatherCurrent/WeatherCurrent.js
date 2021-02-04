import { Spin } from 'antd';
import React from 'react';



export const setSun = (date, timeZone) =>{
    let time = new Date((date + (timeZone)) * 1000)
    // if(!date && !timeZone) return <Spin />
    return time.toLocaleTimeString('en-GB',{timeZone: 'UTC'}).slice(0,-3)
}


const WeatherCurrent = ({detailedWeather,timeZone}) => {

    const { feels_like, pressure, humidity, dew_point, uvi, clouds, wind_speed, sunrise, sunset } = detailedWeather

    let sun = (
        <p>
            Восход: {setSun(sunrise, timeZone)} / Заход: {setSun(sunset, timeZone)}
        </p>)
    let paragraph = (!timeZone) ? <Spin /> : sun

    return (
        <div className='weather'>
            <h2>Погода на сегодня:</h2>
            <div>
                {paragraph}
            </div>
            <div style={{ display: 'flex' }}>
                <ul>
                    <li>По ощущениэ: {feels_like}</li>
                    <li>Давление: {pressure}</li>
                    <li>Влажность: {humidity}</li>
                    <li>Точка росы :{dew_point}</li>
                </ul>
                <ul>
                    <li>Ультрафиолетовый индекс: {uvi} </li>
                    <li>Облачность: {clouds} </li>
                    <li>Скорость Ветра: {wind_speed} </li>
                    <li></li>
                </ul>
            </div>

        </div>
    )
}

export default WeatherCurrent


