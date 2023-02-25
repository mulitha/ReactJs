import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const amountsArray = props.dataPoints.map((x) => x.value);
  const totalMaxVal = Math.max(...amountsArray);

  return (
    <div className="chart">
      {props.dataPoints.map((x) => (
        <ChartBar
          maxValue={totalMaxVal}
          value={x.value}
          label={x.label}
          key={x.label}
        />
      ))}
    </div>
  );
};

export default Chart;
