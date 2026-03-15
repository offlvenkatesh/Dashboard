import classes from "./ComponentR32.module.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
export default function ComponentR32() {
  const data = [
    { name: "Jan", uv: 23, ux: 3, pv: 60, amt: 48 },
    { name: "Feb", uv: 26, ux: 2.2, pv: 61.1, amt: 42.5 },
    { name: "Mar", uv: 23, ux: 6.8, pv: 62.0, amt: 41.5 },
    { name: "Apr", uv: 26, ux: 4.9, pv: 60.2, amt: 45.2 },
    { name: "May", uv: 23, ux: 6.3, pv: 61.1, amt: 43.8 },
    { name: "Jun", uv: 26, ux: 5.6, pv: 62.0, amt: 44.4 },
    { name: "Jul", uv: 23, ux: 6.5, pv: 61.3, amt: 45.6 },
    { name: "Aug", uv: 26, ux: 4.8, pv: 61.1, amt: 43.3 },
    { name: "Sep", uv: 23, ux: 6.2, pv: 62.2, amt: 41.4 },
    { name: "Oct", uv: 26, ux: 5.3, pv: 60.0, amt: 42.6 },
    { name: "Nov", uv: 23, ux: 6.7, pv: 61.1, amt: 40.2 },
    { name: "Dec", uv: 26, ux: 5.0, pv: 60.3, amt: 41.8 },
  ];

  return (
    <div className={classes.ContainerDiv}>
      <div className={classes.MainTitle}>System Temperature (°C)</div>
      <div className={classes.DataContainer}>
        <div className={classes.AreaChartContainer}>
          <AreaChart
            width={600}
            height={480}
            data={data}
            margin={{
              top: 40,
              right: 5,
              left: 5,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="0" vertical={false} />
            <XAxis hide={true} />
            <YAxis
              ticks={[4, 12, 24, 36, 48, 58]}
              padding={{ top: 20, bottom: 10 }}
              tickFormatter={(value) => `${value} °C`}
              tick={{ fill: "#ffffff", fontSize: 20 }}
              tickLine={false}
              axisLine={false}
              domain={[2, 58]}
            />

            <Tooltip />

            <Area
              type="bump"
              dataKey="uv"
              stroke="#2766c0"
              strokeWidth={2}
              fill="none"
            />

            <Area
              type="monotone"
              dataKey="ux"
              stroke="#c44fb5"
              strokeWidth={2}
              fill="none"
            />

            <Area
              type="step"
              dataKey="pv"
              stroke="#4caf50"
              strokeWidth={2}
              fill="none"
            />
   <Area
              type="monotoneY"
              dataKey="amt"
              stroke="#a33f4a"
              strokeWidth={3}
              fill="none"
              isAnimationActive={false}
            />
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
              <span className={classes.label}>Raspberry Pi 4</span>
              <span className={classes.value}>46.7 °C</span>
            </div>
            <div className={classes.legendItem}>
              <span
                className={`${classes.colorBox} ${classes.reserved}`}
              ></span>
              <span className={classes.label}>PiKVM</span>
              <span className={classes.value}>44.3 °C</span>
            </div>
            <div className={classes.legendItem}>
              <span
                className={`${classes.colorBox} ${classes.reserved1}`}
              ></span>
              <span className={classes.label}>CPU: AMD Ryzen 7</span>
              <span className={classes.value}>40.3 °C</span>
            </div>
            <div className={classes.legendItem}>
              <span
                className={`${classes.colorBox} ${classes.reserved2}`}
              ></span>
              <span className={classes.label}>GPU: AMD Radeon RX 6 </span>
              <span className={classes.value}>38 °C</span>
            </div>
                        <div className={classes.legendItem}>
              <span
                className={`${classes.colorBox} ${classes.reserved1}`}
              ></span>
              <span className={classes.label}>CPU: AMD Ryzen RX 67</span>
              <span className={classes.value}>26 °C</span>
            </div>
                        <div className={classes.legendItem}>
              <span
                className={`${classes.colorBox} ${classes.reserved1}`}
              ></span>
              <span className={classes.label}>CPU: AMD Ryzen 788</span>
              <span className={classes.value}>14.3 °C</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
