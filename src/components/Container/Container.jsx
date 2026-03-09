import React from 'react'
import Row1 from '../Row1/Row1'
import classes from "./Container.module.css"
export default function Container() {
  return (
    <div className={classes.bodybg}>
        <Row1 />
    </div>
  )
}
