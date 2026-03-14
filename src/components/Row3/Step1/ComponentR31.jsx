import React, { useEffect, useState } from "react";
import classes from "./ComponentR31.module.css";

export default function ComponentR31() {

  const [cpuValues, setCpuValues] = useState({
    cpu0: 8,
    cpu1: 7,
    cpu2: 2,
    cpu3: 5
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCpuValues(prev => ({
        cpu0: prev.cpu0 + 1,
        cpu1: prev.cpu1 + 1,
        cpu2: prev.cpu2 + 1,
        cpu3: prev.cpu3 + 1
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.outerDiv}>
      <div className={classes.innerDiv1}>
        <div className={classes.Title}>RPI4 CPU Usage (%)</div>

        <div className={classes.cpuGrid}>
          
          <div className={classes.cpuBox}>
            <div className={classes.cpuLabel}>CPU 0</div>
            <div className={`${classes.cpuValue} ${classes.green}`}>
              {cpuValues.cpu0}%
            </div>
          </div>

          <div className={classes.cpuBox}>
            <div className={classes.cpuLabel}>CPU 1</div>
            <div className={`${classes.cpuValue} ${classes.yellow}`}>
              {cpuValues.cpu1}%
            </div>
          </div>

          <div className={classes.cpuBox}>
            <div className={classes.cpuLabel}>CPU 2</div>
            <div className={`${classes.cpuValue} ${classes.blue}`}>
              {cpuValues.cpu2}%
            </div>
          </div>

          <div className={classes.cpuBox}>
            <div className={classes.cpuLabel}>CPU 3</div>
            <div className={`${classes.cpuValue} ${classes.orange}`}>
              {cpuValues.cpu3}%
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
