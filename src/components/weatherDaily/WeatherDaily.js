import React from 'react';
import WeatherColumn from './WeatherColumn';
import './weatherDaily.scss'

import ExtraData from './extraData/ExtraData';
import { numTemp, roseOfWind } from '../helpersFunc/helpersFunc';
// import 'antd/dist/antd.css';


const WeatherDaily = ({
    nameLocality, dailyTemp, humidity, pop, wind
}) => {

    const { morn, day, eve, night, min, max } = dailyTemp
    const { speed,deg } = wind
    
    let castumWind = roseOfWind(deg)
    console.log(castumWind,deg);

    let newHumidity = ExtraData('Вероятность Осадков', `${pop * 100}%`, 'Влажность', `${humidity}%` )
    let castomTemp = ExtraData( `${numTemp(min)} / ${numTemp(max)}`,'','мин/макс ℃' )
    let castomWind = ExtraData('Ветер',castumWind, 'Скорость ветра', speed)


    const weatherHelper = (title, temp, humidity, pop, ) => {

        return (
            <WeatherColumn
                title={title}
                temp={numTemp(temp)}
                humidity={humidity}

                pop={pop} />
        )
    }

    let morningColumn = weatherHelper('Утро', morn, humidity, pop)
    let dayColumn = weatherHelper('День', day, humidity, pop)
    let eveColumn = weatherHelper('Вечер', eve, humidity, pop)
    let nightColumn = weatherHelper('Ночь', night, humidity, pop)


    return (
        <div className='weather-daily'>
            <h2>Прогноз на сегодня: {nameLocality}</h2>
            <div className='weather-daily__card'>
                <div className='weather-daily__box-temp'>
                    {morningColumn}
                    {dayColumn}
                    {eveColumn}
                    {nightColumn}
                </div>
                <div className='weather-daily__box-extradata'>
                    {newHumidity}
                    {castomTemp}
                    {castomWind}
                </div>
            </div>
        </div>
    )
}

export default WeatherDaily


