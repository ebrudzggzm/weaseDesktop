import React, { useEffect, useState } from "react";

const Clock = () => {
  const [clock, setClock] = useState();

  const showTime = () => {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let ampm = h >= 12 ? 'pm' : 'am'; // Check if it's afternoon (pm) or morning (am)

    if (h == 0) {
      h = 12;
    }

    if (h > 12) {
      h = h - 12;
    }  
        
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    let time = h + ":" + m +' '+ ampm;
    setClock(time);
    setTimeout(showTime, 1000);
  };

  useEffect(() => {
    showTime();
  }, [clock]);

  return <div>{clock}</div>;
};

export default Clock;
