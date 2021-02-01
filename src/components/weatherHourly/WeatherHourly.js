import React from 'react';
import './weatherHourly.scss';



const WeatherHourly = ({hourlyData,iconHourly}) => {
  
    // console.log(hourlyData);
   let hour = hourlyData.map(el=>{
       const {date,temperature,pop,icon} = el
     
       let time = new Date(date * 1000)
       let clock = time.toLocaleTimeString().slice(0,-3)
       
       return(
        <div style={{display:'flex', flexDirection:'column',textAlign:'center'}}>
            <div >
                {clock}
            </div>
            <div >
               <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt='gg' />
            </div>
            <div >
               {pop}
            </div>
            <div>
            {temperature}
            </div>
        </div>
       )
   })

    return (
        <div className='weather-hourly' style={{display:'flex', justifyContent:'space-between',}}>
            {hour}
        </div>
    )
}

export default WeatherHourly


