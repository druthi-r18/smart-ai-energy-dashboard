export default function KpiCard({ title, value, color }) {
  return (
    <div
      style={{
        background: "#0f172a",
        padding: "20px",
        borderRadius: "16px",
        color: "white",
        width: "220px",
        boxShadow: `0 0 15px ${color}`,
        border: `1px solid ${color}`,
        transition: "0.3s",
      }}
    >
      <h3 style={{ color: "#94a3b8" }}>{title}</h3>

      <h1
        style={{
          color: color,
          marginTop: "15px",
          fontSize: "34px",
        }}
      >
        {value}
      </h1>
    </div>
  );
}