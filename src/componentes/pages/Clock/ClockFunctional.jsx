import { useEffect, useState } from "react";

const ClockFunctional = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => tickFunctional(), 1000);
    return () => clearInterval(interval);
  },[time]);

  const tickFunctional = () => (
    setTime(new Date()) 
  )

  return (
    <>
      <h1>Hello from Clock 2 - Functional!</h1>
      <h2>It is {time.toLocaleTimeString()}.</h2>
    </>
  )
};

export default ClockFunctional;