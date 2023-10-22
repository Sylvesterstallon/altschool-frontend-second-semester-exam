import React, { useState } from 'react';


export default function Counter() {
    const [value, setValue,] = useState(0)

    return(
        <div>
            <div className='counter'>
                <input type='text' placeholder='set counter value'/>
                <h2>Count</h2>
                <h2>{value}</h2>
                <button className='btn'  onClick={() => setValue(value + 1)}>Increment</button>
                <button  className='btn' onClick={() => setValue(value - 1)}>Decrement</button>
                <button className='btn'  onClick={() => setValue(0)}>Reset</button>
               

            </div>
        </div>
    )

    
}
