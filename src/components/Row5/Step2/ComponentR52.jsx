import classes from "./ComponentR52.module.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function ComponentR52() {

  const data = [
    { t: 1, nvme: 46, ssd: 40, hdd: 35, patriot: 33 },
    { t: 2, nvme: 46, ssd: 40, hdd: 35, patriot: 33 },
    { t: 3, nvme: 47, ssd: 40, hdd: 35, patriot: 33 },
    { t: 4, nvme: 46, ssd: 40, hdd: 35, patriot: 33 },
    { t: 5, nvme: 47, ssd: 40, hdd: 35, patriot: 33 },
    { t: 6, nvme: 46, ssd: 40, hdd: 35, patriot: 33 },
    { t: 7, nvme: 47, ssd: 40, hdd: 35, patriot: 33 },
    { t: 8, nvme: 46, ssd: 40, hdd: 35, patriot: 33 }
  ];

  return (
    <div className={classes.ContainerDiv}>

      <div className={classes.MainTitle}>
        Disk Temperature (°C)
      </div>

      <div className={classes.DataContainer}>

        <div className={classes.AreaChartContainer}>

          <ResponsiveContainer width="100%" height={160}>
            <LineChart data={data}>

              <CartesianGrid
                stroke="#2a2f36"
                vertical={false}
              />

              <XAxis hide />

              <YAxis
                domain={[30, 50]}
                ticks={[35, 40, 45, 50]}
                tickFormatter={(v) => `${v} °C`}
                tick={{ fill: "#5a80c8", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />

              <Tooltip formatter={(v)=>`${v} °C`} />

              <Line
                type="monotone"
                dataKey="nvme"
                stroke="#c67aff"
                strokeWidth={2}
                dot={false}
              />

              <Line
                type="monotone"
                dataKey="ssd"
                stroke="#7bf55f"
                strokeWidth={2}
                dot={false}
              />

              <Line
                type="monotone"
                dataKey="hdd"
                stroke="#e16e0b"
                strokeWidth={2}
                dot={false}
              />

              <Line
                type="monotone"
                dataKey="patriot"
                stroke="#1a408b"
                strokeWidth={2}
                dot={false}
              />

            </LineChart>
          </ResponsiveContainer>

        </div>


        {/* RIGHT SIDE LEGEND (your layout) */}
        <div className={classes.MainContainer}>

          <div className={classes.TitleContainer}>
            <h6 className={classes.h6Container}>Name</h6>
            <h6 className={classes.h6Container}>Last *</h6>
          </div>


          <div className={classes.legendItem}>
            <span className={`${classes.colorBox} ${classes.reserved2}`}></span>
            <span className={classes.label}>NVME: SN750</span>
            <span className={classes.value}>47 °C</span>
          </div>

          <div className={classes.legendItem}>
            <span className={`${classes.colorBox} ${classes.used}`}></span>
            <span className={classes.label}>SSD: SSV5</span>
            <span className={classes.value}>40 °C</span>
          </div>

          <div className={classes.legendItem}>
            <span className={`${classes.colorBox} ${classes.reserved1}`}></span>
            <span className={classes.label}>HDD: TOSHIBA</span>
            <span className={classes.value}>35 °C</span>
          </div>

          <div className={classes.legendItem}>
            <span className={`${classes.colorBox} ${classes.available}`}></span>
            <span className={classes.label}>SSD: Patriot Burst</span>
            <span className={classes.value}>33 °C</span>
          </div>

        </div>

      </div>
    </div>
  );
}
