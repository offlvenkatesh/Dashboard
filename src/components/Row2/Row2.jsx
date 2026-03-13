import React from 'react'
import classes from "./Row2.module.css"
import ComponentR1 from './Step1/ComponentR1'
import ComponentR2 from './Step2/ComponentR2'
import ComponentR3 from './Step3/ComponentR3'
import ComponentR4 from './Step4/ComponentR4'
import ComponentR5 from './Step5/ComponentR5'
export default function Row2() {
  return (
    <div className={classes.Row2}>
        <ComponentR1 />
        <ComponentR2 />
        <ComponentR3 />
        <ComponentR4 />
        <ComponentR5 />
    </div>
  )
}
