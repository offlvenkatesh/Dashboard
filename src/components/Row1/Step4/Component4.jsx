import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine } from 'recharts';
import classes from "./Component4.module.css"
export default function Component4() {
  const data = [
  {
    name: 'power A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
    value: "5.4W"
  },
  {
    name: 'power B',
    uv: -3000,
    pv: 1398,
    amt: 2210,
    value: "12.4 W"
  },
  {
    name: 'power C',
    uv: -2000,
    pv: -9800,
    amt: 2290,
    value: "48.3 W"
  },
  {
    name: 'power D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
    value: "78.2 W"
  },
  {
    name: 'power E',
    uv: -1890,
    pv: 4800,
    amt: 2181,
    value: "8.2 W"
  },
  {
    name: 'power F',
    uv: 2390,
    pv: -3800,
    amt: 2500,
    value: "0.99 W"
  },
  {
    name: 'power G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
    value: "27.1 W"
  },
];

  return (
    <div className={classes.outerDiv}>
      <div className={classes.Title}>System Power Metrics</div>
      <div className={classes.subTitle }>Power</div>
      <div className={classes.DataContainer}>
        <div className={classes.BarChartContainer}>
            <BarChart
      style={{ width: '80%', maxWidth: '500px', maxHeight: '20vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      stackOffset="sign"
      margin={{
        top: 0,
        right: 0,
        left: 0,
        bottom: 8,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" horizontal={false} vertical={false}/>
      <XAxis dataKey="name" hide/>
      <YAxis width="auto" hide/>
      <Tooltip />
      <ReferenceLine y={0} stroke="#000" />
      <Bar dataKey="pv" fill="#8884d8" stackId="stack" />
      <Bar dataKey="uv" fill="#82ca9d" stackId="stack" />


    </BarChart>
    </div>
      </div>
    </div>
  )
}
