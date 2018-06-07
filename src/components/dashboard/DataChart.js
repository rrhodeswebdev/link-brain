import React from "react";
import moment from "moment";
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";

function DataChart(props) {
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

  weekData.forEach(data => {
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
    <LineChart data={newData} width={500} height={200}>
      <XAxis dataKey="day" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Line type="monotone" dataKey="count" stroke="#8884d8" fill="#8884d8" />
    </LineChart>
  );
}

export default DataChart;
