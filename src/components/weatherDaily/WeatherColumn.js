import React from 'react';
import './weatherColumn.scss'



const WeatherColumn= ({
    temp,title
}) => {

    


    return (
        <div className='weather-column'>
            <div className='weather-column__section'>
            
                <div className='weather-column__title'>
                    <p >{title}</p>
                </div>
                <div className='weather-column__value'>
                    <p >{temp}</p>
                </div>
                
            </div>
            
        </div>
    )

}

export default WeatherColumn


