import { Pie, PieChart } from "recharts";
import classes from "./Component1.module.css";

const RADIAN = Math.PI / 180;

const data = [
  { name: "Used", value: 820, label: "905 MiB", fill: "#ce0f1f" },
  { name: "Available", value: 256, label: "256 MiB", fill: "#4d4d50" },
  { name: "Reserved", value: 2888, label: "2.82 GiB", fill: "#1a408b" },
];

const renderCustomLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  label,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      dy={10}
      fill="#cbc2d1"
      textAnchor="middle"
      dominantBaseline="hanging"
      fontSize={12}
      fontWeight="bold"
    >
      {label}
    </text>
  );
};

export default function Step1() {
  return (
    <div className={classes.outerDiv}>
      <div className={classes.Title}>RP14 Memory Usage (%)</div>

      <div className={classes.DataContainer}>

        <div className={classes.pieChartContainer}>
          <PieChart width={180} height={180}>
            <Pie
              data={data}
              innerRadius="60%"
              outerRadius="90%"
              cornerRadius="3%"
              paddingAngle={2}
              startAngle={195}
              endAngle={-270}
              dataKey="value"
              label={renderCustomLabel}
              labelLine={false}
              stroke="none"
            />
          </PieChart>
        </div>

        <div className={classes.DetailsContianer}>

          <div className={`${classes.legendItem} ${classes.first}`}>
            <span className={`${classes.colorBox} ${classes.available}`}></span>
            <span className={classes.label}>Available</span>
            <span className={classes.value}>71%</span>
          </div>

          <div className={classes.legendItem}>
            <span className={`${classes.colorBox} ${classes.used}`}></span>
            <span className={classes.label}>Used</span>
            <span className={classes.value}>22%</span>
          </div>

          <div className={classes.legendItem}>
            <span className={`${classes.colorBox} ${classes.reserved}`}></span>
            <span className={classes.label}>Reserved</span>
            <span className={classes.value}>6%</span>
          </div>

        </div>

      </div>
    </div>
  );
}
