import './header.scss'
import React from 'react'


const Header =()=>{
   
  
    const clockCover = () => {
        let times = new Date()
        let clocks = times.toLocaleDateString('en-GB').split('/')
        let clocker = clocks.map(el => {
            if (el.length <= 1) {
                return '0' + el
            } return el
        })
        return clocker.join(' . ')
    }

    return(
        <div className='header'>
            Сегодня <span className='header__date'> {clockCover()} </span>
        </div>
    )
}

export default Header