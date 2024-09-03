import React from 'react';
import classes from "../styles/Videos.module.css";
import Video from "./Video";

const Videos = () => {
  return (
    <div className={classes.videos}>
        {Array(8).fill(null).map((_, i) => (
            <div key={i}><Video /></div>
        ))}
      {/* <Video />
      <Video />
      <Video />
      <Video /> */}
    </div>
  )
}

export default Videos;
