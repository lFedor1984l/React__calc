import React from 'react';
import './Button.css'

export default function Button({symbol, color, hendleClick}) {
  return (
    <div className='button__box'>
        <button 
            onClick = {() => hendleClick(symbol)}
            className='button' 
            style={{backgroundColor: color}}
        >
            {symbol}
        </button>
    </div>
  )
}
