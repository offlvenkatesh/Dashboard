import React from 'react'
import classes from "./Row3.module.css"
import ComponentR31 from './Step1/ComponentR31'
import ComponentR32 from './Step2/ComponentR32'
import ComponentR33 from "./Step3/ComponentR33"
import ComponentR35 from "./Step5/ComponentR35"
export default function Row3() {
  return (
    <div className={classes.Row3}>
        <ComponentR31 />
        <ComponentR32 />
        <ComponentR33 />
        <ComponentR35 />
    </div>
  )
}
