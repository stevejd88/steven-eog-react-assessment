import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

// const pracData = [{at: '1', value: 85, pv: 2400, amt: 2400}, {name: '2', value: 102, pv: 2400, amt: 2400},{name: '3', value: 75, pv: 2400, amt: 2400}];

function convertMS(milliseconds, time) {
  var day, hour, minute, seconds;
  seconds = Math.floor(milliseconds / 1000);
  minute = Math.floor(seconds / 60);
  seconds = seconds % 60;
  hour = Math.floor(minute / 60);
  minute = minute % 60;
  day = Math.floor(hour / 24);
  hour = hour % 24;
  if (time === 'hour') {
    if (hour > 12) {
      return hour - 17;
    } else {
      return hour - 5;
    }
  } else if (time === 'minute') {
    return minute;
  }
}

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
      <LineChart width={1000} height={800} data={newData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
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
