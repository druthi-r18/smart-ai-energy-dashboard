import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { time: "9 AM", power: 2 },
  { time: "10 AM", power: 3 },
  { time: "11 AM", power: 2.5 },
  { time: "12 PM", power: 4 },
  { time: "1 PM", power: 3.8 },
];

export default function EnergyChart() {
  return (
    <div
      style={{
        background: "#0f172a",
        padding: "20px",
        borderRadius: "16px",
        marginTop: "20px",
        width: "fit-content",
        boxShadow: "0 0 15px #38bdf8",
      }}
    >
      <LineChart width={700} height={300} data={data}>
        <CartesianGrid stroke="#334155" />
        <XAxis dataKey="time" stroke="#fff" />
        <YAxis stroke="#fff" />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="power"
          stroke="#38bdf8"
          strokeWidth={3}
        />
      </LineChart>
    </div>
  );
}