import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const Graphic = () => {
  const data = [
    {
      name: 'Page A',
      Gasolina: 4000,
      Hibrido: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      Gasolina: 3000,
      Hibrido: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      Gasolina: 2000,
      Hibrido: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      Gasolina: 2780,
      Hibrido: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      Gasolina: 1890,
      Hibrido: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      Gasolina: 2390,
      Hibrido: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      Gasolina: 3490,
      Hibrido: 4300,
      amt: 2100,
    },
  ];
  return (
    <div>
     
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Hibrido"
            stroke="#108ee9"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="Gasolina" stroke="#82ca9d" />
        </LineChart>
    
    </div>
  );
};

export default Graphic;
