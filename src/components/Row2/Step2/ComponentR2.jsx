import classes from "./ComponentR2.module.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
export default function ComponentR2() {
const data = [
  { name: "1",  uv: 20, ux: 2, pv: 38, amt: 8  },
  { name: "2",  uv: 9,  ux: 6,  pv: 3,  amt: 1  },
  { name: "3",  uv: 18, ux: 0, pv: 40, amt: 9  },
  { name: "4",  uv: 21, ux: 3, pv: 18, amt: 4  },
  { name: "5",  uv: 14,  ux: 5,  pv: 2,  amt: 1  },
  { name: "6",  uv: 22, ux: 5, pv: 28, amt: 6  },
  { name: "7",  uv: 11, ux: 7, pv: 50, amt: 10 },
  { name: "8",  uv: 19,  ux: 4,  pv: 2,  amt: 1  },
  { name: "9",  uv: 10, ux: 2, pv: 16, amt: 4  },
  { name: "10", uv: 18, ux: 6, pv: 42, amt: 9  },
  { name: "11", uv: 17,  ux: 5,  pv: 3,  amt: 1  },
  { name: "12", uv: 10, ux: 4, pv: 26, amt: 6  },
  { name: "13", uv: 18, ux: 8, pv: 44, amt: 9  },
  { name: "14", uv: 15,  ux: 3,  pv: 1,  amt: 1  },
  { name: "15", uv: 13, ux: 2, pv: 14, amt: 3  },
  { name: "16", uv: 17, ux: 7, pv: 36, amt: 8  },
  { name: "17", uv: 18,  ux: 6,  pv: 3,  amt: 1  },
  { name: "18", uv: 22, ux: 7, pv: 48, amt: 10 },
  { name: "19", uv: 11, ux: 3, pv: 20, amt: 5  },
  { name: "20", uv: 16,  ux: 4,  pv: 2,  amt: 1  },
  { name: "21", uv: 10, ux: 2, pv: 32, amt: 7  },
  { name: "22", uv: 18, ux: 6, pv: 42, amt: 9  },
  { name: "23", uv: 17,  ux: 5,  pv: 2,  amt: 1  },
  { name: "24", uv: 18, ux: 4, pv: 24, amt: 6  },
  { name: "25", uv: 11,  ux: 6,  pv: 3,  amt: 1  },
  { name: "26", uv: 19, ux: 0, pv: 46, amt: 10 },
  { name: "27", uv: 14, ux: 2, pv: 16, amt: 4  },
  { name: "28", uv: 10,  ux: 3,  pv: 1,  amt: 1  },
  { name: "29", uv: 10, ux: 8, pv: 36, amt: 8  },
  { name: "30", uv: 18,  ux: 6,  pv: 3,  amt: 1  },
];

  return (
    <div className={classes.ContainerDiv}>
      <div className={classes.MainTitle}>CPU Usage (%)</div>
      <div className={classes.DataContainer}>
        <div className={classes.AreaChartContainer}>
          <AreaChart
            width={600}
            height={450}
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
              ticks={[8, 20, 40, 60, 80]}
              tickFormatter={(value) => `${value} %`}
              tick={{ fill: "#ffffff", fontSize: "20" }}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stackId="1"
              stroke="#ccb423"
              strokeWidth="2"
              fill="#8c972e"
            />
            <Area
              type="monotone"
              dataKey="ux"
              stackId="1"
              stroke="#ccb423"
              strokeWidth="3.7"
              fill="#8c972e"
            />
            <Area
              type="monotone"
              dataKey="pv"
              stackId="1"
              stroke="#283228"
              fill="#8c972e"
            />
            <Area
              type="monotone"
              dataKey="amt"
              stackId="1"
              stroke="#ccb423"
              strokeWidth="3"
              fill="#8a7b28"
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
              <span className={classes.label}>CPU 0 TO</span>
              <span className={classes.value}>12%</span>
            </div>

            <div className={classes.legendItem}>
              <span
                className={`${classes.colorBox} ${classes.reserved}`}
              ></span>
              <span className={classes.label}>CPU 1 TO</span>
              <span className={classes.value}>8%</span>
            </div>
            <div className={classes.legendItem}>
              <span
                className={`${classes.colorBox} ${classes.reserved1}`}
              ></span>
              <span className={classes.label}>CPU 2 TO</span>
              <span className={classes.value}>0%</span>
            </div>
            <div className={classes.legendItem}>
              <span
                className={`${classes.colorBox} ${classes.reserved2}`}
              ></span>
              <span className={classes.label}>CPU 3 TO</span>
              <span className={classes.value}>6%</span>
            </div>
            <div className={classes.legendItem}>
              <span
                className={`${classes.colorBox} ${classes.reserved2}`}
              ></span>
              <span className={classes.label}>CPU 4 TO</span>
              <span className={classes.value}>36%</span>
            </div>
            <div className={classes.legendItem}>
              <span
                className={`${classes.colorBox} ${classes.reserved2}`}
              ></span>
              <span className={classes.label}>CPU 5 TO</span>
              <span className={classes.value}>19%</span>
            </div>
            <div className={classes.legendItem}>
              <span
                className={`${classes.colorBox} ${classes.reserved2}`}
              ></span>
              <span className={classes.label}>CPU 6 TO</span>
              <span className={classes.value}>6%</span>
            </div>
            <div className={classes.legendItem}>
              <span
                className={`${classes.colorBox} ${classes.reserved2}`}
              ></span>
              <span className={classes.label}>CPU 7 TO</span>
              <span className={classes.value}>1%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
