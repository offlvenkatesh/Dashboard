import React, { memo } from "react";
import classes from "./ComponentR51.module.css";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  LabelList,
  ResponsiveContainer,
  Cell
} from "recharts";

const data = [
  { name: "NVME", value: 43.49, remaining: 56.51, color: "#b57edc" },
  { name: "SSD1 (D:)", value: 1.33, remaining: 98.67, color: "#4ea1ff" },
  { name: "SSD2 (E:)", value: 3.09, remaining: 96.91, color: "#9be58e" },
  { name: "HDD (F:)", value: 5.39, remaining: 94.61, color: "#ff6b6b" },
  { name: "RPI4", value: 59.17, remaining: 40.83, color: "#4ea1ff" },
  { name: "PIKVM", value: 80, remaining: 20, color: "#6ea8ff" }
];

const ComponentR51 = memo(() => {
  return (
    <div className={classes.ContainerDiv }>
        <div className={classes.MainTitle }>Partition Usage (%)</div>
    <ResponsiveContainer width="100%" height={190}>
      <BarChart
        data={data}
        barCategoryGap="30%"
        margin={{ top: 25, right: 10, left: 10, bottom: 0 }}
      >
        <XAxis
          dataKey="name"
          tick={{ fill: "#cbc2d1", fontSize: 11 }}
          axisLine={false}
          tickLine={false}
        />

        <YAxis hide domain={[0, 100]} />

        <Tooltip />

        <Bar
          dataKey="value"
          stackId="a"
          barSize={40}
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={entry.color} />
          ))}
        </Bar>

        <Bar
          dataKey="remaining"
          stackId="a"
          fill="#2a2d34"
          barSize={40}
        >
          <LabelList
            dataKey="value"
            position="top"
            formatter={(v) => `${v}%`}
            style={{ fill: "#cbc2d1", fontSize: 11 }}
          />
        </Bar>

      </BarChart>
    </ResponsiveContainer>
    </div>
  );
});

export default ComponentR51;
