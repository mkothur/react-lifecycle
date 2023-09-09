import {useRef, useState, useEffect} from 'react';

function StopWatch() {
    const [count, setCount] = useState(0);
    const timerIdRef = useRef(0);

    const startTimer = () => {
        if (timerIdRef.current) {
            return;
        }
        timerIdRef.current = setInterval(() => setCount((c) => c + 1), 100);
    }

    const stopTimer = () => {
        clearInterval(timerIdRef.current);
        timerIdRef.current = 0;
    }

    return (
        <div>
            <div>Timer: {count}</div>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
        </div>
    )
}

export default StopWatch;