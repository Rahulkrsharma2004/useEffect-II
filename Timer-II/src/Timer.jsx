import React, { useState, useEffect } from 'react';
import './App.css'

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(count + 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };

  }, [count]);  // with dependencies 

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}

export default Timer;
