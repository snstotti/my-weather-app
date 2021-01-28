import React from 'react';
import './weatherColumn.scss'
import { Spin } from 'antd'
// import 'antd/dist/antd.css';


const WeatherColumn= ({
    temp,humidity,urlIcon,title,pop
}) => {

    
let iconImage = !urlIcon ? <Spin/> : <img src={urlIcon} alt='icon'/>

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
                    {iconImage}
                </div>

                <div className='weather-column__pop'>
                    <p>Вероятность осадков {pop*100}%</p>
                </div>

                <div className='weather-column__humidity'>
                    <p >Влажность {humidity}%</p>
                </div>
                
            </div>
            
        </div>
    )

}

export default WeatherColumn


