import React, {useEffect, useState} from 'react';

const Hack = () => {
    const [count, setCount] = useState(0)
  
   useEffect(() => {
      // const parsedCount = Number(localStorage.getItem("count") || 0)
      setCount(parsedCount)
    }, []);
  
    // useEffect(() => {
    //   localStorage.setItem("count", count)
    // }, [count]);
  
    return (
      <div>
        <div>{count}</div>
        <button onClick={() => setCount(c => c + 1)}>+</button>
        <button onClick={() => setCount(c => c - 1)}>-</button>
      </div>
    )
  }

export default Hack;