import React from 'react'


const Header =({timeZone,hourlyData})=>{
    console.log(timeZone)
    const {date} = hourlyData
    let time = new Date((date + (timeZone)) * 1000)
    let clock = time.toLocaleTimeString('en-GB',{timeZone: 'UTC'}).slice(0,-3)

    return(
        <div>
            {clock}
        </div>
    )
}

export default Header