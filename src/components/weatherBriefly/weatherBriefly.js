import React from 'react';

import { Input } from 'antd';
import 'antd/dist/antd.css';


const WeatherBriefly = ({
    urlIcon,
    onError,
    nameLocality,
    description,
    temperature
}) => {

    const { temp, feels_like, humidity,temp_min ,temp_max } = temperature

    let image = urlIcon ? <img src={urlIcon} className="" alt="" /> : '...Loading'

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
        <div style={{display:'flex', justifyContent:'space-around',width:800,}}>
            <div style={{width:400}}>
                <p>Погода: {!onError && nameLocality}</p>
                <h2>{numTemp(temp)}</h2>
                <span>{desc(description)}</span>
                <p>
                    Ощущается как: {numTemp(feels_like)}
                </p>
                <p>
                    Влажность: {humidity}%
                </p>
            </div>



            <div>
                {image}
                <p style={{textAlign:'center'}}>{numTemp(temp_min)} / {numTemp(temp_max)}</p>
            </div>


           

            
        </div>
    )

}

export default WeatherBriefly


