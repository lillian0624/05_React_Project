// import App from ".././App"
import LogItem from "./LogItem/LogItem";
import "./Logs.css";

// 日志容器
const Logs = () => {
  return (
    <div className="logs">
      <LogItem
        date={new Date(2021, 7, 20, 19, 0)}
        desc={"learning"}
        time={"45"}
      />
      <LogItem
        date={new Date(2023, 1, 23, 1, 34)}
        desc={"learning2"}
        time={"50"}
      />
    </div>
  );
};

export default Logs;
