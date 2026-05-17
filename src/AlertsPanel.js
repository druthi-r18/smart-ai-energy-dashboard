export default function AlertsPanel() {
  return (
    <div
      style={{
        background: "#0f172a",
        padding: "20px",
        borderRadius: "16px",
        border: "1px solid #ef4444",
        boxShadow: "0 0 15px #ef4444",
        marginTop: "20px",
        width: "400px",
      }}
    >
      <h2 style={{ color: "#ef4444" }}>
        ⚠ High Power Usage Detected
      </h2>

      <p style={{ color: "white" }}>
        Block A power consumption exceeded safe limit.
      </p>

      <p style={{ color: "#facc15" }}>
        Suggested Action: Turn OFF unused fans/lights.
      </p>
    </div>
  );
}