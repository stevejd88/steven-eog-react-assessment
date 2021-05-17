import React from 'react';
import { Query } from '@apollo/client/react/components';
import { gql, useQuery } from '@apollo/client';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';



// const pracData = [{at: '1', value: 85, pv: 2400, amt: 2400}, {name: '2', value: 102, pv: 2400, amt: 2400},{name: '3', value: 75, pv: 2400, amt: 2400}];

 function LineGraph({data}) {
    const chartData = [...data];
    // console.log(chartData);
    return (
      <LineChart width={600} height={300} data={chartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="at" />
        <YAxis />
      </LineChart>
    )
  }

export default LineGraph;

