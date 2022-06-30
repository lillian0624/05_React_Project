import React from "react";

const LogItem = () => {
  return (
    <div>
      <div className="date">
        <div className="month">June</div>
        <div className="day">24</div>
      </div>

      <div className="content">
        <h2 className="desc">learn react</h2>
        <dev className="time">45min</dev>
      </div>
    </div>
  );
};

export default LogItem;
