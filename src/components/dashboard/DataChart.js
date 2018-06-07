import React from "react";
import moment from "moment";
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";

function DataChart(props) {
  const data = props.data;
  const week = moment().subtract(7, "d");
  const weekData = [];
  const newData = [];

  data.map(item => {
    if (moment(item.updated) > week) {
      return weekData.push(item);
    }
    return weekData;
  });

  let count = 0;
  let day;

  weekData.forEach(data => {
    if (moment(data.updated).isSame(data.updated, "day")) {
      count++;
      day = moment(data).format("ddd");
    }
    console.log(count);
    console.log(day);
    newData.push({
      day: moment(data).format("ddd"),
      count: count
    });
  });

  console.log(newData);

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
