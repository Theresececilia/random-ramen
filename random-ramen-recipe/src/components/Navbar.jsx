import React from 'react'
import classes from './Navbar.module.css'

export default function Navbar() {
  return (
    <div className={classes.navbar}>
      <div className={classes.innerNav}>
        <h3 className={classes.title}>RANDOM-RAMEN</h3>
        <p className={classes.yum}>Yum Yum</p>
      </div>
      <div className={classes.innerNav}>
        <a className={classes.nav}>Chicken</a>
        <a className={classes.nav}>Pork</a>
        <a className={classes.nav}>Beef</a>
        <a className={classes.nav}>Veggie</a>
      </div>
    </div>
  )
}
