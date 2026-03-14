import classes from "./ComponentR42.module.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList
} from "recharts";

export default function ComponentR42() {

  const data = [
    { name: "Jan", uv: 2, ux: 3, pv: 21, amt: 4, value: 0.0 },
    { name: "Feb", uv: 2, ux: 3, pv: 21, amt: 4, value: 2.5 },
    { name: "Mar", uv: 2, ux: 13, pv: 21, amt: 4, value: 5.0 },
    { name: "Apr", uv: 2, ux: 3, pv: 21, amt: 4, value: 7.5 },
  ];

  return (
    <div className={classes.ContainerDiv}>
      <div className={classes.MainTitle}>GPU / VRAM Frequency</div>

      <div className={classes.DataContainer}>
        <div className={classes.AreaChartContainer}>

          <AreaChart
            width={600}
            height={500}
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
              ticks={[5, 10, 20, 30]}
              tickFormatter={(value) => `${value}%`}
              tick={{ fill: "#b61830", fontSize: 29}}
              tickLine={false}
              axisLine={false}
            />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="uv"
              stackId="1"
              stroke="#e4ca29"
              strokeWidth={2}
              fill="#e4ca29"
        >
            </Area>

      <Area
              type="stepAfter"
              dataKey="ux"
              stackId="1"
              stroke="#8e5323"
              strokeWidth={5}
              fill="none"
        >
            </Area>
          </AreaChart>

        </div>

        <div className={classes.MainContainer}>

          <div className={classes.TitleContainer}>
            <h6 className={classes.h6Container}>Name</h6>
            <h6 className={classes.h6Container}>Last</h6>
          </div>

          <div className={classes.DetailsContianer}>

            <div className={classes.legendItem}>
              <span className={`${classes.colorBox} ${classes.used}`}></span>
              <span className={classes.label}>GPU Clock</span>
              <span className={classes.value}>088 MH</span>
            </div>

            <div className={classes.legendItem}>
              <span className={`${classes.colorBox} ${classes.reserved}`}></span>
              <span className={classes.label}>GPU Clock </span>
              <span className={classes.value}>679 MH</span>
            </div>
            <div className={classes.legendItem}>
              <span className={`${classes.colorBox} ${classes.reserved}`}></span>
              <span className={classes.label}>GPU Memory </span>
              <span className={classes.value}>2 MH</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
