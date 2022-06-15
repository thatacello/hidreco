import { Heading } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import React, { PureComponent } from 'react';
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

const data = [
  { name: 'JAN 22', litros: 4000 },
  { name: 'FEV 22', litros: 3000 },
  { name: 'MAR 22', litros: 2000 },
  { name: 'MAI 22', litros: 1900 },
  { name: 'JUN 22', litros: 1890 },
];

export default class GraficoLinha extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/line-chart-connect-nulls-sqp96';

  render() {
    return (
      <div
        style={{
          width: '100%',
          border: '2px solid #eee',
          borderRadius: '6px',
          padding: '2rem',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <Heading as="h4" size="md">
          Histórico de consumo
        </Heading>
        <Text fontSize="sm">Este é o seu consumo desde o início do ano</Text>
        <br />
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            width={500}
            height={500}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              connectNulls
              type="monotone"
              dataKey="litros"
              stroke="#1EBCEE"
              fill="#1EBCEE"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
