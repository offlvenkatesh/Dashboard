import classes from "./Component2.module.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
export default function Component2() {
  const data = [
    { name: "Jan", uv: 8, ux: 3, pv: 21, amt: 4 },
    { name: "Feb", uv: 8, ux: 3, pv: 21, amt: 4 },
    { name: "Mar", uv: 8, ux: 3, pv: 21, amt: 4 },
    { name: "Apr", uv: 8, ux: 3, pv: 21, amt: 4 },
    { name: "May", uv: 8, ux: 3, pv: 21, amt: 4 },
    { name: "Jun", uv: 8, ux: 3, pv: 21, amt: 4 },
  ];

  return (
    <div className={classes.ContainerDiv}>
      <div className={classes.MainTitle}>Memory History</div>
      <div className={classes.DataContainer}>
        <div className={classes.AreaChartContainer}>
          <AreaChart
            width={600}
            height={300}
            data={data}
            margin={{
              top: 0,
              right: 5,
              left: 5,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="0" vertical={false} />
            <XAxis hide={true} />
            <YAxis
              ticks={[8, 16, 24, 32, 40]}
              tickFormatter={(value) => `${value}GiB`}
              tick={{ fill: "#ffffff", fontSize: "20" }}
              tickLine={false}
            />

            <Tooltip />
            <Area
              type="stepAfter"
              dataKey="uv"
              stackId="1"
              stroke="#2766c0"
              strokeWidth="2"
              fill="#27455c"
            />
            <Area
              type="monotone"
              dataKey="ux"
              stackId="1"
              stroke="#a15718"
              strokeWidth="3.7"
              fill="#27455c"
            />
            <Area
              type="monotone"
              dataKey="pv"
              stackId="1"
              stroke="#283228"
              fill="#283228"
            />
            <Area
              type="stepAfter"
              dataKey="amt"
              stackId="1"
              stroke="#a33f4a"
              strokeWidth="3"
              fill="#2e2125"
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
      <span className={classes.label}>Physical Memory</span>
      <span className={classes.value}>31.9 GiB</span>
    </div>

    <div className={classes.legendItem}>
      <span className={`${classes.colorBox} ${classes.reserved}`}></span>
      <span className={classes.label}>Virtual Memory</span>
      <span className={classes.value}>4.75 GiB</span>
    </div>
    <div className={classes.legendItem}>
      <span className={`${classes.colorBox} ${classes.reserved1}`}></span>
      <span className={classes.label}>Used Virtual Memory</span>
      <span className={classes.value}>796 MiB</span>
    </div>
        <div className={classes.legendItem}>
      <span className={`${classes.colorBox} ${classes.reserved2}`}></span>
      <span className={classes.label}>Usage</span>
      <span className={classes.value}>16%</span>
    </div>
  </div>

</div>

      </div>
    </div>
  );
}
