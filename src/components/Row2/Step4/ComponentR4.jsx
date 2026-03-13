
import classes from "./ComponentR4.module.css"
import React, { useEffect, useState, } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
export default function ComponentR4() {
const data = [
  { name: "Jan", uv: 27.4 },
  { name: "Feb", uv: 28.2 },
  { name: "Mar", uv: 27.6 },
  { name: "Apr", uv: 28.7 },
  { name: "May", uv: 27.9 },
  { name: "Jun", uv: 28.3 },
  { name: "Jul", uv: 27.1 },
  { name: "Aug", uv: 28.8 },
  { name: "Sep", uv: 27.5 },
  { name: "Oct", uv: 28.1 },
  { name: "Nov", uv: 27.7 },
  { name: "Dec", uv: 28.4 },
  { name: "Jan2", uv: 27.8 },
  { name: "Feb2", uv: 28.6 },
  { name: "Mar2", uv: 27.3 },
  { name: "Apr2", uv: 28.5 },
];
  const [count, setCount] = useState(718.7499);

  useEffect(() => {
    const CountIncreasing = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(CountIncreasing);
  }, []);


  return (
    
    <div className={classes.outerDiv}>
          <div className={classes.innerDiv1}>
                <div className={classes.Title}>CPU Power</div>
                        <div className={classes.AreaChartContainer}>
                          <AreaChart
                            width={600}
                            height={200}
                            data={data}
                            margin={{
                              top: 10,
                              right: 25,
                              left: 5,
                              bottom: 0,
                            }}
                          >
                            <CartesianGrid strokeDasharray="0" vertical={false} />
                            <XAxis hide={true} />
                            <YAxis
                              ticks={[ 5, 25, 50, 75,] }
                              tickFormatter={(value) => `${value} W`}
                              tick={{ fill: "#2faf92", fontSize: "20" }}
                              tickLine={false}
                               axisLine={false}
                            />
                
                            <Tooltip />
                            <Area
                              type="monotoneY"
                              dataKey="uv"
                              stackId="1"
                              stroke="#2faf92"
                              strokeWidth="2"
                              fill="#26544c"
                            />
                         
                          </AreaChart>
                        </div>
              </div>

                 <div className={classes.innerDiv2}>
                      <div className={classes.Title}>CPU Voltage</div>
              
                      <div className={classes.valueContainer}>
                        <p className={classes.pInnerDiv1}>
                         {count}
            <span>mV</span>
                        </p>
                      </div>
                    </div>
    </div>
  )
}
