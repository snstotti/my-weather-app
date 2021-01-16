import React from 'react';
import './weatherColumn.scss'

// import 'antd/dist/antd.css';


const WeatherColumn= ({
    temp,humidity,urlIcon
}) => {

    

    

   
    return (
        <div className='weather-column'>
            <div className='weather-column__section'>
                <div className='weather-column__title'>
                    <p >Утро</p>
                </div>
                <div className='weather-column__value'>
                    <p >{temp}</p>
                </div>
                
                <div className='weather-column__icon'>
                    <img src={urlIcon} alt='icon'/>
                </div>

                <div className='weather-column__humidity'>
                    <p >{humidity}%</p>
                </div>
                
            </div>
            
        </div>
    )

}

export default WeatherColumn


