import React from 'react';
import './weatherColumn.scss'

// import 'antd/dist/antd.css';


const WeatherColumn= ({
    temp,humidity,urlIcon,title,pop
}) => {
    
    

let iconImage = <img src={urlIcon} alt='icon'/>

if(!urlIcon){return '...Loading'}

    return (
        <div className='weather-column'>
            <div className='weather-column__section'>
                <div className='weather-column__title'>
                    <p >{title}</p>
                </div>
                <div className='weather-column__value'>
                    <p >Средняя температура {temp}</p>
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


