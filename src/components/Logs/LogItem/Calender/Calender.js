import React from "react";
import "./Calender.css";

const Calender = (props) => {

  const month = props.date.toLocaleString("zh-CN", { month: "long" });
  return (
    <div className="date">
      <div className="month">{month}</div>
      <div className="day">{props.date.getDate()}</div>
    </div>
  );
};

export default Calender;
