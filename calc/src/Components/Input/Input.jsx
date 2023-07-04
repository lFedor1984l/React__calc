import React from 'react';
import './Input.css'

export default function Input ({enter, result}) {
    return (
        <div className="wrapper__input">
            <div className='input__box'>
                <h1 className='input__result'>{result}</h1>
            </div>
            <div className='input__box'>
                <h1 className='input__enter'>{enter}</h1>
            </div>
        </div>
    )
}
