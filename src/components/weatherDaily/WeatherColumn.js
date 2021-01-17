import React from 'react';
import './weatherColumn.scss'

// import 'antd/dist/antd.css';


const WeatherColumn= ({
    temp,humidity,urlIcon,title
}) => {

    

    
let iconUrl = `http://openweathermap.org/img/wn/${urlIcon}@2x.png`

    

    return (
        <div className='weather-column'>
            <div className='weather-column__section'>
                <div className='weather-column__title'>
                    <p >{title}</p>
                </div>
                <div className='weather-column__value'>
                    <p >{temp}</p>
                </div>
                
                <div className='weather-column__icon'>
                    <img src={iconUrl} alt='icon'/>
                </div>

                <div className='weather-column__humidity'>
                    <p >{humidity}%</p>
                </div>
                
            </div>
            
        </div>
    )

}

export default WeatherColumn


