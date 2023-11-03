
import { useEffect, useState } from "react"

function Timer() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
            console.log('first')
        }, 1000);

        const cleanupFunction = () => {
            clearInterval(intervalId);
        };
        return cleanupFunction;

        // return () => {
        //     clearInterval(intervalId);
        //   };

    }, [])

    return <h2>Timer: {count}</h2>
}

export default Timer
