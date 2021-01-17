import React from 'react';
import WeatherColumn from './WeatherColumn';
import './weatherDaily.scss'
import {numTemp} from '../weatherBriefly/weatherBriefly'
// import 'antd/dist/antd.css';


const WeatherDaily= ({
    onLoading,
    dailyTemp,
    urlIcon,
    humidity,
    iconMorn
}) => {

    

    const {morn,day,eve,night} =dailyTemp

    
    
   
    return (
        <div className='weather-daily'>
            <h2>Прогноз на сегодня: Props</h2>
            <div className='weather-daily__card'>
                <WeatherColumn 
                    title={'Утро'}
                    humidity={humidity}
                    temp={numTemp(morn)}
                    urlIcon={iconMorn[0]} />
                <WeatherColumn 
                    title={'День'}
                    humidity={humidity}
                    temp={numTemp(day)}
                    urlIcon={iconMorn[1]} />
                <WeatherColumn 
                    title={'Вечер'}
                    humidity={humidity}
                    temp={numTemp(eve)}
                    urlIcon={iconMorn[2]} />
                <WeatherColumn 
                    title={'Ночь'}
                    humidity={humidity}
                    temp={numTemp(night)}
                    urlIcon={iconMorn[3]} />
            </div>
            
        </div>
    )

}

export default WeatherDaily


