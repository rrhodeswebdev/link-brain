import React from "react";
import moment from "moment";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";
import Typography from "@material-ui/core/Typography";

function DataChartLinks(props) {
  const data = props.data;
  const week = moment().subtract(7, "d");

  const days = {};

  let today = moment();
  for (let i = 0; i < 7; i++) {
    days[today.format("ddd D")] = {
      count: 0,
      order: 6 - i
    };
    today.subtract(1, "days");
  }

  const weekData = data.filter(item => moment(item.updated) > week);
  const weekDataStatus = weekData.filter(
    item => item.status === "Link Recieved"
  );

  weekDataStatus.forEach(data => {
    const day = moment(data.updated).format("ddd D");
    if (days[day]) {
      days[day].count++;
    } else {
      days[day] = { count: 1 };
    }
  });

  const newData = Object.keys(days)
    .map(day => ({
      day: day,
      count: days[day].count,
      order: days[day].order
    }))
    .sort((a, b) => a.order - b.order);

  return (
    <div>
      <Typography variant="title" align="center" style={{ margin: "20px 0" }}>
        {props.title}
      </Typography>
      <div className="line-chart">
        <ResponsiveContainer>
          <LineChart data={newData}>
            <XAxis dataKey="day" />
            <YAxis interval="preserveEnd" width={40} />
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3" />
            <Line
              type="monotone"
              dataKey="count"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default DataChartLinks;
