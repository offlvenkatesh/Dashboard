import React, { useEffect, useState, memo } from "react";
import classes from "./ComponentR5.module.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  LabelList,
  ResponsiveContainer,
} from "recharts";
import dayjs from "dayjs";

const data = [
  { name: "CPU 0", value: 100  , uv : 30 },
  { name: "CPU 2", value: 100  , uv : 50},
  { name: "CPU 3", value: 100  ,  uv:20},
  { name: "CPU 4", value: 100 , uv:10 },
];

const CpuChart = memo(() => {
  return (
    <ResponsiveContainer width="100%" height={140}>
      <BarChart
        layout="vertical"
        data={data}
        margin={{ top: 15, right: 60, left: 10, bottom: 5 }}
      >

        <XAxis type="number" hide />

        <YAxis
          type="category"
          dataKey="name"
          tick={{ fill: "#cbc2d1", fontSize: 11 }}
          width={50}
          axisLine={false}
          tickLine={false}
        />

        <Tooltip />

        <Bar dataKey="value" fill="#788bea" barSize={26}>
          <LabelList
            dataKey="value"
            position="right"
            formatter={()=>'700 MHz'}
            style={{ fill: "#6b8fee", fontSize: 9 }}
          />
        </Bar>x;
    padding-left: 8px;
        <Bar dataKey="uv" ></Bar>
      </BarChart>
    </ResponsiveContainer>
  );
});

export default function ComponentR5() {
  const [time, setTime] = useState(dayjs());

  useEffect(() => {
    const datetimings = setInterval(() => {
      setTime(dayjs());
    }, 1000);

    return () => clearInterval(datetimings);
  }, []);

  return (
    <div className={classes.outerDiv}>
      <div className={classes.innerDiv1}>
        <div className={classes.Title}>RiKVM Uptime</div>

        <div className={classes.valueContainer}>
          <p className={classes.pInnerDiv1}>
            6 d <span>{time.format("hh:mm:ss")}</span>
          </p>
        </div>
      </div>

      <div className={classes.innerDiv2}>
        <div className={classes.Title}>PiKVM CPU Frequency</div>
        <CpuChart />
      </div>
    </div>
  );
}
