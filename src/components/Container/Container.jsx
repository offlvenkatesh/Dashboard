import React from 'react'
import Row1 from '../Row1/Row1'
import Row2 from '../Row2/Row2'
import classes from "./Container.module.css"
export default function Container() {
  return (
    <div className={classes.bodybg}>
        <Row1 />
        <Row2 />
    </div>
  )
}
