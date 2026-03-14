import React from 'react'
import classes from "./Row4.module.css"
import ComponentR41 from './Step1/ComponentR41'
import ComponentR42 from './Step2/ComponentR42'
import ComponentR43 from './Step3/ComponentR43'
import ComponentR44 from './Step4/ComponentR44'
import ComponentR45 from './Step5/ComponentR45'
export default function Row4() {
  return (
    <div className={classes.Row4}>
      <ComponentR41 />
      <ComponentR42 />
      <ComponentR43 />
      <ComponentR44 />
      <ComponentR45 />
    </div>
  )
}
