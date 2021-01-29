import React from 'react';
import WeatherColumn from './WeatherColumn';
import './weatherDaily.scss'
import { numTemp } from '../weatherBriefly/weatherBriefly'
// import 'antd/dist/antd.css';


const WeatherDaily = ({
    nameLocality, dailyTemp, humidity, pop, wind
}) => {







    const { morn, day, eve, night } = dailyTemp
    const { speed,deg } = wind


    const weatherHelper = (title, temp, humidity, pop) => {

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
                    <div>
                        <div className='weather-daily__pop'>
                            <p>Вероятность осадков {pop * 100}%</p>
                        </div>

                        <div className='weather-daily__humidity'>
                            <p >Влажность {humidity}%</p>
                        </div>
                    </div>
                    <div>
                        <div className='weather-daily__wind-deg'>
                            <p>Ветер {deg}</p>
                        </div>

                        <div className='weather-daily__wind-speed'>
                            <p >Скорость ветра {Math.round(speed)} м/с</p>
                        </div>
                    </div>
                </div>

            </div>


        </div>
            
       
    )

}

export default WeatherDaily


