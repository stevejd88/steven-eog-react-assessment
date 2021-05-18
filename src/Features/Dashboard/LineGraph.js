import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { convertMS } from '../../App.utils';

function LineGraph({ data }) {
  const chartData = [...data];
  const newData = chartData.map(item => {
    let newAt;

    if (convertMS(item.at, 'minute') > 0 && convertMS(item.at, 'minute') < 10) {
      newAt = `${convertMS(item.at, 'hour')}:0${convertMS(item.at, 'minute')}`;
    } else {
      newAt = `${convertMS(item.at, 'hour')}:${convertMS(item.at, 'minute')}`;
    }
    return { ...item, at: newAt };
  });

  return (
    <div>
      <LineChart width={800} height={600} data={newData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Tooltip />
        <XAxis dataKey="at" onMouseOver={e => console.log(e)} />
        <YAxis />
      </LineChart>
    </div>
  );
}

export default LineGraph;
