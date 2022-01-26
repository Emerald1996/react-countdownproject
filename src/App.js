import React, { useState } from 'react';

const UseCounter = () => {
    const [value, setValue] = useState(0)

    const increaseButton = ()=>{
        setValue((prevState) => {
            return prevState = prevState + 1
        }) 
    }
    const decreaseButton = () => {
        setValue((prevState) => {
            return prevState = prevState - 1
        }) 
    }
    const resetButton = () => {
        setValue(0) 
           
    }
   

    return <>
        <h1>Counter</h1>
        <h2>My current count is : <big>({value})</big></h2>
        <div className='btns'>
            <button className='btn' onClick={increaseButton}> ➕ </button>
            <button className='btn' onClick={resetButton}>RESET</button>
            <button className='btn' onClick={decreaseButton}>➖</button>
        </div>

    </>
}
export default UseCounter



