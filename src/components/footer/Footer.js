import React from 'react'
import './footer.scss'
import google from '../../image/google.svg'
import telega from '../../image/telega.svg'
import viber from '../../image/viber.svg'
import github from '../../image/git_hub.svg'


const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__link'><span>Свяжитесь со мной:</span> 
                <a href='mailto:snstotti@gmail.com'><img src={google} alt='gmail' /></a>
                <a href='viber://chat?number=+79674901470'><img src={viber} alt='viber' /></a>
                <a href='https://github.com/snstotti'><img src={github} alt='github' /></a>
                <a href='https://t.me/NikolayKhanzhin'><img src={telega} alt='telega' /></a>
            </div>
            <div className='footer__progectLinks'>
                    <span>Еще проекты:</span> 
                    <ul>
                        <li><a href='https://snstotti.github.io/starDB'>StarDB</a></li>
                        <li><a href='https://snstotti.github.io/fun-box-test-app'>fun box test app</a></li>
                        <li><a href='https://snstotti.github.io/test-app-adminka/'>Adminka</a></li>
                        <li><a href='https://snstotti.github.io/to-do/'>To-do</a></li>
                    </ul>
            </div>
            <div className='footer__apiLink'><span>API:</span><a href='https://openweathermap.org/'><img src='https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png' alt='api'/></a></div>
        </div>
    )
}

export default Footer