import React, { useEffect, useState, memo } from "react";
import classes from "./ComponentR3.module.css";
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
        layout="horizontal"
        data={data}
        margin={{ top: 25, right: 10, left: 10, bottom: 5 }}
      >
 

        <XAxis
          type="category"
          dataKey="name"
          tick={{ fill: "#cbc2d1", fontSize: 11 }}
          axisLine={false}
          tickLine={false}
        />

        <YAxis type="number" hide />

        <Tooltip />

        <Bar
          dataKey="value"
          fill="#9be58e"
          barSize={30}

          radius={[4, 4, 0, 0]}
        >
          <LabelList
            dataKey="value"
            position="top"
            formatter={(v) => `${v}GHz`}
            style={{ fill: "#cbc2d1", fontSize: 11 }}
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
            1 d <span>{time.format("hh:mm:ss")}</span>
          </p>
        </div>
      </div>

      <div className={classes.innerDiv2}>
        <div className={classes.innerDiv2Title}>RP14 CPU Frequency</div>
        <CpuChart />
      </div>
    </div>
  );
}
