import React from "react";
import {
  PieChart,
  Cell,
  Pie,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#bb28ff", "#ffc4d8", "#a5a833"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  if (percent !== 0) {
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  }
};

const tmpArray = [];
export default function PollChart({ answers }) {
  let chartData = answers.map((a) => ({
    name: a.answer,
    value: a.voteCount,
  }));

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={300} height={300}>
        <Legend layout="vertical" verticalAlign="top" align="right" />
        <Pie
          dataKey="value"
          isAnimationActive={true}
          data={chartData}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={180}
          label={renderCustomizedLabel}
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}
