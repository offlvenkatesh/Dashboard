import classes from "./ComponentR45.module.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
export default function ComponentR45() {
  const data = [
    { name: "00:00", uv: 0 },
    { name: "04:00", uv: 4},
    { name: "08:00", uv: 10 },
    { name: "12:00", uv: 22 },
    { name: "16:00", uv: 45 },
  ];

  return (
    <div className={classes.ContainerDiv}>
      <div className={classes.MainTitle}>
        Energy Generation
        <span className={classes.Divspan}>
          {" "}
          <i class="fa-solid fa-clock-rotate-left"></i>Today so far{" "}
        </span>
      </div>
      <div className={classes.DataContainer}>
        <div className={classes.AreaChartContainer}>
          <AreaChart
            width={500}
            height={320}
            data={data}
            margin={{
              top: 0,
              right: 5,
              left: 5,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="0" />
            <XAxis
              dataKey="name"
              domain={[8, "dataMax"]}
              tick={{ fill: "#ffffff", fontSize: 20 }}
              axisLine={false}
            />
            <YAxis
              ticks={[5, 15, 25, 35, 45, 55]}
              padding={{ top: 20, bottom: 10 }}
              tickFormatter={(value) => `${value}`}
              tick={{ fill: "#ffffff", fontSize: 20 }}
              axisLine={false}
              domain={[2, 58]}
            />

            <Tooltip />

            {/* Blue flat line at 36 °C */}
            <Area
              type="bump"
              dataKey="uv"
              stroke="#66a960"
              strokeWidth={3}
              fill="#354d36"
            />
          </AreaChart>
        </div>
        <div className={classes.MainContainer}>
          <div className={classes.TitleContainer}>
            <h6 className={classes.h6Container}>Name</h6>
            <h6 className={classes.h6Container}>Max</h6>
          </div>

          <div className={classes.DetailsContianer}>
            <div className={classes.legendItem}>
              <span className={`${classes.colorBox} ${classes.used}`}></span>
              <span className={classes.label}>Current</span>
              <span className={classes.value}>2.41 kW</span>
            </div>
            <div className={classes.legendItem}>
              <span
                className={`${classes.colorBox} ${classes.reserved}`}
              ></span>
              <span className={classes.label}>RDaily</span>
              <span className={classes.value}>21.2 kWh</span>
            </div>
            <div className={classes.legendItem}>
              <span
                className={`${classes.colorBox} ${classes.reserved1}`}
              ></span>
              <span className={classes.label}>RTotal</span>
              <span className={classes.value}>44.8 MWh</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
