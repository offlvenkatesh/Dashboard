import React, { useEffect, useState, memo } from "react";
import classes from "./ComponentR1.module.css";
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
  { name: "CPU 0", value: 2 },
  { name: "CPU 2", value: 2 },
  { name: "CPU 3", value: 2 },
  { name: "CPU 4", value: 2 },
];

const CpuChart = memo(() => {
  return (
    <ResponsiveContainer width="100%" height={140}>
      <BarChart
        layout="vertical"
        data={data}
        margin={{ top: 15, right: 60, left: 10, bottom: 5 }}
      >
        <defs>
          <linearGradient id="cpuGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#d4e84a" />
            <stop offset="100%" stopColor="#4a90d9" />
          </linearGradient>
        </defs>

        <XAxis type="number" hide />

        <YAxis
          type="category"
          dataKey="name"name
          tick={{ fill: "#cbc2d1", fontSize: 11 }}
          width={50}
          axisLine={false}
          tickLine={false}
        />

        <Tooltip />

        <Bar dataKey="value" fill="url(#cpuGradient)" barSize={26}>
          <LabelList
            dataKey="value"
            position="right"
            formatter={(v) => `${v} GHz`}
            style={{ fill: "#5a80c8", fontSize: 11 }}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
});

export default function ComponentR1() {
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
        <div className={classes.Title}>RP14 Uptime</div>

        <div className={classes.valueContainer}>
          <p className={classes.pInnerDiv1}>
            6 d <span>{time.format("hh:mm:ss")}</span>
          </p>
        </div>
      </div>

      <div className={classes.innerDiv2}>
        <div className={classes.Title}>RP14 CPU Frequency</div>
        <CpuChart />
      </div>
    </div>
  );
}
