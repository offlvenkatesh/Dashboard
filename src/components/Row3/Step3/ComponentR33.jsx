import classes from "./ComponentR33.module.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
export default function ComponentR33() {
  const data = [
    { name: "10/08", uv: 13, ux: 4, pv: 46, amt: 49 },
    { name: "10/11", uv: 13.8, ux: 4, pv: 46, amt: 51 },
    { name: "10/14", uv: 13., ux: 4, pv: 46, amt: 51 },
    { name: "10/17", uv: 13.2, ux: 4, pv: 46, amt: 50 },
    { name: "10/20", uv: 13.9, ux: 4, pv: 46, amt: 50 },
  ];

  return (
    <div className={classes.ContainerDiv}>
      <div className={classes.MainTitle}>Currency Exchange Rates 
        <span className={classes.Divspan}> <i class="fa-solid fa-clock-rotate-left"></i> Last 15days</span>
      </div>
      <div className={classes.DataContainer}>
        <div className={classes.AreaChartContainer}>
          <AreaChart
            width={600}
            height={580}
            data={data}
            margin={{
              top: 40,
              right: 5,
              left: 5,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="0"  />
            <XAxis dataKey="name"
            
              tick={{ fill: "#ffffff",  fontSize: 27 }}
              axisLine={false}/>
            <YAxis
              ticks={[4, 12, 24, 36, 48, 58]}
              padding={{ top: 20, bottom: 10 }}
              tickFormatter={(value) => `${value}`}
              tick={{ fill: "#ffffff", fontSize: 27 }}
             
              axisLine={false}
              domain={[2, 58]}
            />

            <Tooltip />

            {/* Blue flat line at 36 °C */}
            <Area
              type="bump"
              dataKey="uv"
              stroke="#2766c0"
              strokeWidth={3}
              fill="none"
            />

            {/* Pink/red wiggly line at ~46 °C */}
            <Area
              type="monotone"
              dataKey="ux"
              stroke="#e03044"
              strokeWidth={3}
              fill="none"
            />

            {/* Green smooth line at 40 °C */}
            <Area
              type="bump"
              dataKey="pv"
              stroke="#4caf50"
              strokeWidth={5}
              fill="none"
            />

            {/* Orange sawtooth line at ~38 °C */}
            <Area
              type="step"
              dataKey="amt"
              stroke="#e03044"
              strokeWidth={5}
              fill="none"
              isAnimationActive={false}
            />
          </AreaChart>
        </div>
        <div className={classes.MainContainer}>
          <div className={classes.TitleContainer}>
            <h6 className={classes.h6Container}>Name</h6>
            <h6 className={classes.h6Container}>Max</h6>
            <h6 className={classes.h6Container}>Min</h6>
            <h6 className={classes.h6ContainerL}>Last</h6>

          </div>

          <div className={classes.DetailsContianer}>
            <div className={classes.legendItem}>
              <span className={`${classes.colorBox} ${classes.used}`}></span>
              <span className={classes.label}>BTC / USD</span>
              <span className={classes.value}>$69.4K</span>
              <span className={classes.value1}>$59.3K</span>
                <span className={classes.value2}>$61K</span>
            </div>
            <div className={classes.legendItem}>
              <span
                className={`${classes.colorBox} ${classes.reserved}`}
              ></span>
              <span className={classes.label}>EUR / BRL</span>
              <span className={classes.value}>R$6.21</span>
              <span className={classes.value1}>R$5.96</span>
              <span className={classes.value2}>R$53</span>
            </div>
            <div className={classes.legendItem}>
              <span
                className={`${classes.colorBox} ${classes.reserved1}`}
              ></span>
              <span className={classes.label}>USD / BRL</span>
              <span className={classes.value}>R$5.73</span>
              <span className={classes.value1}>R$5.40</span>
              <span className={classes.value2}>R$71</span>
            </div>
            <div className={classes.legendItem}>
              <span
                className={`${classes.colorBox} ${classes.reserved2}`}
              ></span>
              <span className={classes.label}>GBP / EUR</span>
              <span className={classes.value}>$1.200</span>
              <span className={classes.value1}>R$1.19</span>
              <span className={classes.value2}>$782</span>
            </div>
                        <div className={classes.legendItem}>
              <span
                className={`${classes.colorBox} ${classes.reserved1}`}
              ></span>
              <span className={classes.label}>EUR / USD</span>
              <span className={classes.value}>$1.100</span>
              <span className={classes.value1}>R$1.08</span>
              <span className={classes.value2}>R122</span>
            </div>
                        <div className={classes.legendItem}>
              <span
                className={`${classes.colorBox} ${classes.reserved1}`}
              ></span>
              <span className={classes.label}>CNY / USD</span>
              <span className={classes.value}>R$0.19</span>
              <span className={classes.value1}>R$0.14</span>
              <span className={classes.value2}>R$13</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
