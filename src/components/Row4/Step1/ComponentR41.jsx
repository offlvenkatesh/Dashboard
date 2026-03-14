import classes from "./ComponentR41.module.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList
} from "recharts";

export default function ComponentR41() {

  const data = [
    { name: "Jan", uv: 8, ux: 3, pv: 21, amt: 4, value: 0.0 },
    { name: "Feb", uv: 8, ux: 3, pv: 21, amt: 4, value: 2.5 },
    { name: "Mar", uv: 8, ux: 3, pv: 21, amt: 4, value: 5.0 },
    { name: "Apr", uv: 8, ux: 3, pv: 21, amt: 4, value: 7.5 },
    { name: "May", uv: 8, ux: 3, pv: 21, amt: 4, value: 10.0 },
    { name: "Jun", uv: 8, ux: 3, pv: 21, amt: 4, value: 12.5 },
  ];

  return (
    <div className={classes.ContainerDiv}>
      <div className={classes.MainTitle}>GPU / VRAM Usage (%)</div>

      <div className={classes.DataContainer}>
        <div className={classes.AreaChartContainer}>

          <AreaChart
            width={600}
            height={400}
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
              ticks={[4, 20, 40, 60, 80]}
              tickFormatter={(value) => `${value} %`}
              tick={{ fill: "#b61830", fontSize: 25 }}
              tickLine={false}
              axisLine={false}
            />

            <Tooltip />

            <Area
              type="stepAfter"
              dataKey="uv"
              stackId="1"
              stroke="#e4ca29"
              strokeWidth={2}
              fill="#e4ca29"
            >
              {/* <LabelList
                dataKey="value"
                position="right"
                formatter={(v) => `${v} GHz`}
                style={{ fill: "#5a80c8", fontSize: 11 }}
              /> */}
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
              <span className={classes.label}>RGPU</span>
              <span className={classes.value}>402.6 MB</span>
            </div>

            <div className={classes.legendItem}>
              <span className={`${classes.colorBox} ${classes.reserved}`}></span>
              <span className={classes.label}>VRAM</span>
              <span className={classes.value}>402.6 MB</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
