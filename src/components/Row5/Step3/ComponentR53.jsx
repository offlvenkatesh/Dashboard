import React from "react";
import classes from "./ComponentR53.module.css";

export default function ComponentR53() {
  return (
    <div className={classes.ContainerDiv}>
      <div className={classes.MainTitle}>Drive Health Status (%)</div>

      <div className={classes.DataContainer}>

        <div className={classes.row}>
          <span className={classes.label}>SSD: Patriot Burst</span>
          <span className={`${classes.value} ${classes.blue}`}>96%</span>
        </div>

        <div className={classes.row}>
          <span className={classes.label}>SSD: SSV5</span>
          <span className={`${classes.value} ${classes.green}`}>100%</span>
        </div>

        <div className={classes.row}>
          <span className={classes.label}>NVME: SN750</span>
          <span className={`${classes.value} ${classes.purple}`}>100%</span>
        </div>

      </div>
    </div>
  );
}
