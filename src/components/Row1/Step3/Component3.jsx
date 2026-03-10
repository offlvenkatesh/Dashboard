import React, { useEffect, useState } from "react";
import classes from "./Component3.module.css";
import dayjs from "dayjs";
export default function Component3() {
  const [count, setCount] = useState(4501);

  useEffect(() => {
    const CountIncreasing = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(CountIncreasing);
  }, []);


  const [time , setTime] = useState(dayjs());
  useEffect (()=>{
    const datetimings = setInterval(()=>{
      setTime(dayjs());
    },1000);

    return () => clearInterval(datetimings);
  },[])

  return (
    <div className={classes.outerDiv}>
      <div className={classes.innerDiv1}>
        <div className={classes.Title}>Memory Clock</div>

        <div className={classes.valueContainer}>
          <p className={classes.pInnerDiv1}>
            {count}
            <span>MHz</span>
          </p>
        </div>
      </div>

<div className={classes.innerDiv2}>
  <div className={classes.Title}>Memory Latency</div>

  <div className={classes.latencyContainer}>
    <div className={classes.latencyItem}>
      <span>TCAS</span>
      <h3>18</h3>
    </div>

    <div className={classes.latencyItem}>
      <span>TRCD</span>
      <h3>{time.format("sss")}</h3>
    </div>

    <div className={classes.latencyItem}>
      <span>TRP</span>
      <h3>{time.format("mm")}</h3>
    </div>

    <div className={classes.latencyItem}>
      <span>TRAS</span>
      <h3>{time.format("ss")}</h3>
    </div>
  </div>
</div>


    </div>
  );
}
