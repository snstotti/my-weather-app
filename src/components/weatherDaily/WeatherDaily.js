import React from 'react';
import WeatherColumn from './WeatherColumn';
import './weatherDaily.scss'
import {numTemp} from '../weatherBriefly/weatherBriefly'
// import 'antd/dist/antd.css';


const WeatherDaily= ({
    onLoading,
    dailyTemp,
    urlIcon,
    humidity
}) => {

    

    const {morn,eve} =dailyTemp

    

   
    return (
        <div className='weather-daily'>
            <h2>Прогноз на сегодня: Props</h2>
            <div className='weather-daily__card'>
                <WeatherColumn 
                    humidity={humidity}
                    temp={numTemp(morn)}
                    eve={eve}
                    urlIcon={urlIcon} />
            </div>
            
        </div>
    )

}

export default WeatherDaily


