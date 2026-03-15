import React, { useEffect, useState } from "react";
import classes from "./ComponentR44.module.css";
import dayjs from "dayjs";
export default function ComponentR44() {
  const [count, setCount] = useState(0.04720);

  useEffect(() => {
    const CountIncreasing = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 3000);

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
        <div className={classes.Title}>GPU Voltage</div>

        <div className={classes.valueContainer}>
          <p className={classes.pInnerDiv1}>
            {count}
            <span>v</span>
          </p>
        </div>
      </div>

<div className={classes.innerDiv2}>
  <div className={classes.Title}>GPU Fan</div>

  <div className={classes.latencyContainer}>
    <div className={classes.latencyItem}>
      <h3>0 rpm</h3>
    </div>

    <div className={classes.latencyItem}>
      <h3>{time.format("ss")} %</h3>
    </div>

  </div>
</div>


    </div>
  );
}
