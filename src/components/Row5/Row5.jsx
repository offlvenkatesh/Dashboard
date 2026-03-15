import React from 'react'
import classes from "./Row5.module.css"
import ComponentR51 from './Step1/ComponentR51'
import ComponentR52 from './Step2/ComponentR52'
import ComponentR53 from './Step3/ComponentR53'
import ComponentR54 from "./Step4/ComponentR54"
export default function Row5() {
  return (
    <div className={classes.Row5}>
        <ComponentR51 />
        <ComponentR52 />
        <ComponentR53 />
        <ComponentR54 />
    </div>

  )
}
