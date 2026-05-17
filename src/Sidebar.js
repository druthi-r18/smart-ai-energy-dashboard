export default function Sidebar() {
  return (
    <div
      style={{
        width: "240px",
        background: "#08111f",
        color: "white",
        minHeight: "100vh",
        padding: "20px",
        borderRight: "1px solid #1e293b",
      }}
    >
      <h2
        style={{
          color: "#22c55e",
          marginBottom: "40px",
          fontSize: "28px",
        }}
      >
        🌿 Eco Innovators
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
        <p style={menuStyle}>🏠 Dashboard</p>
        <p style={menuStyle}>⚡ Energy Usage</p>
        <p style={menuStyle}>📊 Analytics</p>
        <p style={menuStyle}>🚨 Alerts</p>
        <p style={menuStyle}>🌦 Weather</p>
        <p style={menuStyle}>⚙ Settings</p>
      </div>
    </div>
  );
}

const menuStyle = {
  cursor: "pointer",
  color: "#cbd5e1",
  fontSize: "18px",
};