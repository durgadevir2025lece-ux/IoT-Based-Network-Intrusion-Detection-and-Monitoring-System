
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

import "./TrafficChart.css";

const data = [
  { time: "9 AM", traffic: 30 },
  { time: "10 AM", traffic: 45 },
  { time: "11 AM", traffic: 35 },
  { time: "12 PM", traffic: 65 },
  { time: "1 PM", traffic: 50 },
  { time: "2 PM", traffic: 80 },
  { time: "3 PM", traffic: 60 }
];

function TrafficChart() {
  return (
    <div className="traffic-chart">
      <h3>Network Traffic Monitoring</h3>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis dataKey="time" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="traffic"
            stroke="#3b82f6"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TrafficChart;
