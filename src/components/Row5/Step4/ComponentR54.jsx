import classes from "./ComponentR54.module.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
} from "recharts";

export default function ComponentR54() {
  const data = [
    { value: -120, value1: 100, value2: -10 },
    { value: -120, value1: 100, value2: -60 },
    { value: -120, value1: 100, value2: -0 },
    { value: -120, value1: 100, value2: -70 },
    { value: -120, value1: 100, value2: -0 },
    { value: -120, value1: 100, value2: -80 },
    { value: -120, value1: 100, value2: -0 },
    { value: -120, value1: 100, value2: -40 },
  ];

  return (
    <div className={classes.ContainerDiv}>
      <div className={classes.MainTitle}>Disk Usage</div>

      <div className={classes.DataContainer}>
        <div className={classes.YAxisLabel}>Write / Read</div>

        <div className={classes.AreaChartContainer}>
          <AreaChart
            width={330}
            height={170}
            data={data}
            margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
          >
            <CartesianGrid stroke="#2b2d33" vertical={false} />

            <XAxis hide />

         <YAxis
  domain={[-111, 100]}
  ticks={[-100, -50, 0, 50, 100]}
  tickFormatter={(v) => `${v} kB/s`}
  tick={{ fill: "#5aa0ff", fontSize: 13 }}
  width={80}
  axisLine={false}
  tickLine={false}
/>


            <Tooltip />

            <ReferenceLine y={0} stroke="#e4ca29" strokeWidth={2} />

            <Area
              type="monotone"
              dataKey="value1"
              stroke="none"
              strokeWidth={2}
              fill="#1e1e41"
              fillOpacity={0.3}
            />
  <Area
              type="monotone"
              dataKey="value2"
              stroke="#915da7"
              strokeWidth={2}
              fill="none"
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="none"
              strokeWidth={2}
              fill="#3c2037"
            />
          </AreaChart>
        </div>
      </div>
    </div>
  );
}
