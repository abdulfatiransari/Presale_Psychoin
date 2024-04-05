import React, { PureComponent } from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Label, Legend } from 'recharts';

const data = [
  { name: 'Future needs of the Community', value: 14 },
  { name: 'Initial Coin Offering(ICO)', value: 21 },
  { name: 'Marketing, Research and Development', value: 21 },
  { name: 'Community-Centric Token Allocation', value: 30 },
];

const COLORS = ['#9F2B68', '#800080', '#702963', '#7F00FF']; // Define your colors here

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-in-responsive-container-qyv6t';

  render() {
    return (
      <div style={{ width: '100%', height: 500 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              dataKey="value"
              data={data}
              labelLine={false}
              label={renderCustomizedLabel}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }: any) => {
  const radius = outerRadius + 10; // Adjusted to start outside the circle
  const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
  const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));
  const arrowSize = 10;
  const arrowX = cx + (outerRadius + arrowSize) * Math.cos(-midAngle * (Math.PI / 180));
  const arrowY = cy + (outerRadius + arrowSize) * Math.sin(-midAngle * (Math.PI / 180));

  return (
    <>
      <path d={`M${arrowX},${arrowY}L${x},${y}`} stroke="#ccc" />
      <text x={arrowX + (x > cx ? arrowSize : -arrowSize)} y={arrowY} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    </>
  );
};
