import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid } from 'recharts';

function DataChart(props) {
  return(
    <AreaChart data={props.data} width={500} height={500}>
      <XAxis dataKey='status'/>
      <YAxis />
      <CartesianGrid strokeDasharray='3 3'/>
      <Area type='monotone' dataKey={props.data.length} stroke='#8884d8' fill='#8884d8'/>
    </AreaChart>
  )
}

export default DataChart;