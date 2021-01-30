import React from 'react';
import './extraData.scss'

const ExtraData =(extra,dataExtra,description,dataDescription)=>{

    return (
        <div className='extra'>
            <div className='extra__data'>
                <p>{extra} {dataExtra}</p>
            </div>

            <div className='extra__description'>
                <p >{description} {dataDescription}</p>
            </div>
        </div>
    )
}
export default ExtraData