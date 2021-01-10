import React from 'react';

import { Input } from 'antd';
import 'antd/dist/antd.css';


const WeatherBriefly = ({
    urlIcon,
    onError,
    nameLocality,
    description,
    feels_like,
    humidity,
    temp
}) => {

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
        return Math.round(num)
    }

    return (
        <div style={{display:'flex', justifyContent:'space-around'}}>
            <div style={{width:400}}>
                <p>Погода: {!onError && nameLocality}</p>
                <h2>{numTemp(temp)}&deg;</h2>
                <span>{desc(description)}</span>
                <p>
                    Ощущается как: {numTemp(feels_like)}&deg;
                </p>
                <p>
                    Влажность: {humidity}%
                </p>
            </div>



            <div style={{width:200}}>
                {image}
            </div>


           

            
        </div>
    )

}

export default WeatherBriefly


