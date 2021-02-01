import React from 'react';
import './customWrapper.scss'


const CustomWrapper = ({children}) => {

    
    return (
        <div className='custom-wrapper'>
            {children}
        </div>
    )

}

export default CustomWrapper


