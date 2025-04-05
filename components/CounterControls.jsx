import React from 'react'

const CounterControls = ({countArray, setCount}) => {
    return (
        <div className="controls">

            <button className='control-btn minus' onClick={() =>  
            {
                countArray.length >= 6
                ? setCount(0) 
                : setCount(c => c - 1)
            }}> -
            </button>
            <button className='control-btn reset' onClick={() => setCount(0)}> Reset</button>
            <button className='control-btn plus' onClick={() => {
                countArray.length >= 6
                ? setCount(0) 
                : setCount(c => c + 1)
            }}> +
            </button>

        </div>
    )
}

export default CounterControls