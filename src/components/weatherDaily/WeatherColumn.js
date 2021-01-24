import React from 'react';
import './weatherColumn.scss'

// import 'antd/dist/antd.css';


const WeatherColumn= ({
    temp,humidity,urlIcon,title,pop
}) => {
    console.log(urlIcon);
    if(!urlIcon){return 'bad'}

    
let iconUrl = `http://openweathermap.org/img/wn/${urlIcon}@2x.png`

    

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
                    <img src={iconUrl} alt='icon'/>
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


