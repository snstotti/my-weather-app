import React from 'react';
import './weatherBriefly.scss'
import { Input } from 'antd';
// import 'antd/dist/antd.css';


const WeatherBriefly = ({
    urlIcon,
    onError,
    nameLocality,
    description,
    temperature
}) => {

    const { temp, feels_like, humidity,temp_min ,temp_max } = temperature

    let icon = <img src={urlIcon} className="weather-breafly__icon" alt="icon weather" /> 
    
    let image = urlIcon ? icon : '...Loading'

    const desc = text => {
        if (!text) {
            return text
        }
        return text[0].toUpperCase() + text.slice(1)
    }
    const numTemp = num => {
        if (!num) {
            return num
        }
        return <>{Math.round(num)}&deg;</>
    }

    return (
        <div className='weather-breafly'>
            <div className='weather-breafly__card'>
                <p className='weather-breafly__title'>
                    Погода: {!onError && nameLocality}
                </p>
                <h2 className='weather-breafly__degree'>{numTemp(temp)}</h2>
                <p className='weather-breafly__feels-like'>
                    Ощущается как: {numTemp(feels_like)}
                </p>
                
                
                <p className='weather-breafly__humidity'>
                    Влажность: {humidity}%
                </p>
            </div>



            <div className='weather-breafly__icon-block'>
                {image}
                <span className='weather-breafly__description'>{desc(description)}</span>
                {/* <p className='weather-breafly__range'>{numTemp(temp_min)} / {numTemp(temp_max)}</p> */}
            </div>


           

            
        </div>
    )

}

export default WeatherBriefly


