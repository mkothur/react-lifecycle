import React, {useEffect, useState} from 'react';

 
export default function Try() {
    const [count, setCount] = useState(0);

    useEffect(() => {
    //    setTimeout(() => {
    //        setCount(count + 1)
    //    }, 1000)
       console.log('changes count')
    }, [count])
    return (
        <div>
            {count}
            <button onClick={() => setCount(count + 1)}>Click</button>
        </div>
    )
}
