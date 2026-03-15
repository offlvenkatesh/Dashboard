import React from 'react'
import Row1 from '../Row1/Row1'
import Row2 from '../Row2/Row2'
import Row3 from '../Row3/Row3'
import Row4 from "../Row4/Row4"
import Row5 from '../Row5/Row5'
import classes from "./Container.module.css"
export default function Container() {
  return (
    <div className={classes.bodybg}>
        <Row1 />
        <Row2 />
        <Row3 />
        <Row4 />
        <Row5 />
    </div>
  )
}
