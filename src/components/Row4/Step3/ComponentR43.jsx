import classes from "./ComponentR43.module.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
} from "recharts";

export default function ComponentR43() {
  const data = [
    { name: "Jan", uv: 2, ux: 3, pv: 21, amt: 4, value: 0.0 },
    { name: "Feb", uv: 2, ux: 3, pv: 21, amt: 4, value: 2.5 },
    { name: "Mar", uv: 2, ux: 13, pv: 21, amt: 4, value: 5.0 },
    { name: "Apr", uv: 2, ux: 3, pv: 21, amt: 4, value: 7.5 },
  ];

  return (
    <div className={classes.ContainerDiv}>
      <div className={classes.MainTitle}>GPU Power</div>

      <div className={classes.DataContainer}>
        <div className={classes.AreaChartContainer}>
          <AreaChart
            width={500}
            height={220}
            data={data}
            margin={{
              top: 0,
              right: 40,
              left: 5,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="0" vertical={false} />

            <XAxis hide />

            <YAxis 
              ticks={[ 10, 20, 30,40]}
              tickFormatter={(value) => `${value} W`}
              tick={{ fill: "#b61830", fontSize: 23 }}
              tickLine={false}
              axisLine={false}
            />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="uv"
              stackId="1"
              stroke="#7a313c"
              strokeWidth={2}
              fill="#7a313c"
            ></Area>
          </AreaChart>
        </div>
      </div>
    </div>
  );
}
