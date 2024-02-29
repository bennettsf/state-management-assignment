import React, { useState } from 'react'

function Counter() {

    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(cnt => cnt + 1)
    }

    const setCountDelay = () => {
        setTimeout(() => {
            setCount(cnt => cnt + 1)
        }, 2000)
    }

  return (
    <div>
        <p>{count}</p>
        <button onClick={handleClick}>Increment</button>
        <button onClick={setCountDelay}>Increment After Delay</button>
        <button onClick={() => {
            setCount(n => n + 1)
            setCount(n => n + 1)
        }}>Increment Twice</button>
    </div>
  )
}

export default Counter