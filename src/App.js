import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [activePage, setActivePage] = useState("dashboard");
  const [theme, setTheme] = useState("dark");
  const [powerUsage, setPowerUsage] = useState(3.2);
  const [notification, setNotification] = useState("");
  const [lightStatus, setLightStatus] = useState("OFF");
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const value = (Math.random() * 6).toFixed(1);
      setPowerUsage(value);

      if (value > 4.5) {
        setNotification("⚠ High Power Usage Detected!");
      } else {
        setNotification("");
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const speakMessage = (msg) => {
    const speech = new SpeechSynthesisUtterance(msg);
    speech.lang = "en-US";
    window.speechSynthesis.speak(speech);
  };

  if (!loggedIn) {
    return (
      <div className={`loginPage ${theme}`}>
        <div className="loginBox">
          <h1>🌿 Eco Innovators</h1>

          <h2>Smart AI Energy Dashboard</h2>

          <button
            className="loginBtn"
            onClick={() => setLoggedIn(true)}
          >
            Enter Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`app ${theme}`}>
      {/* SIDEBAR */}
      <div className="sidebar">
        <h1 className="logo">
          🌿 Eco Innovators
        </h1>

        <div className="menu">
          <p onClick={() => setActivePage("dashboard")}>
            🏠 Dashboard
          </p>

          <p onClick={() => setActivePage("energy")}>
            ⚡ Energy Usage
          </p>

          <p onClick={() => setActivePage("analytics")}>
            📊 Analytics
          </p>

          <p onClick={() => setActivePage("alerts")}>
            🚨 Alerts
          </p>

          <p onClick={() => setActivePage("weather")}>
            🌦 Weather
          </p>

          <p onClick={() => setActivePage("settings")}>
            ⚙ Settings
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="main">

        <div className="topbar">
          <h1>⚡ Smart AI Energy Dashboard</h1>

          <button
            className="themeBtn"
            onClick={() =>
              setTheme(
                theme === "dark" ? "light" : "dark"
              )
            }
          >
            Toggle Theme
          </button>
        </div>

        {/* DASHBOARD */}
        {
          activePage === "dashboard" && (
            <div className="page">
              <h1>🏠 Dashboard Overview</h1>

              <div className="cards">

                <div className="card blue">
                  <h3>Current Power</h3>
                  <h1>{powerUsage} kW</h1>
                </div>

                <div className="card green">
                  <h3>Today's Cost</h3>
                  <h1>₹245</h1>
                </div>

                <div className="card orange">
                  <h3>Carbon Saved</h3>
                  <h1>18%</h1>
                </div>

              </div>
            </div>
          )
        }

        {/* ENERGY */}
        {
          activePage === "energy" && (
            <div className="page">

              <h1>⚡ Energy Usage</h1>

              <div className="bigBox">

                <h2>
                  Live Usage:
                  {powerUsage} kW
                </h2>

                <p>
                  AI continuously monitors classroom energy usage.
                </p>

                <p>
                  High consuming rooms are detected automatically.
                </p>

                <button
                  className="voiceBtn"
                  onClick={() =>
                    speakMessage(
                      `Current usage is ${powerUsage} kilowatt`
                    )
                  }
                >
                  🎤 Voice Assistant
                </button>

              </div>
            </div>
          )
        }

        {/* ANALYTICS */}
        {
          activePage === "analytics" && (
            <div className="page">

              <h1>📊 AI Analytics</h1>

              <div className="bigBox">

                <h2>AI Prediction System</h2>

                <p>
                  Peak Usage:
                  1 PM – 3 PM
                </p>

                <p>
                  Predicted Savings:
                  18%
                </p>

                <p>
                  AI predicts tomorrow’s energy demand using previous trends.
                </p>

              </div>
            </div>
          )
        }

        {/* ALERTS */}
        {
          activePage === "alerts" && (
            <div className="page">

              <h1>🚨 Smart Alerts</h1>

              <div className="bigBox alertBox">

                <h2>
                  ⚠ High Power Usage
                </h2>

                <p>
                  Alert triggers when usage exceeds 4.5 kW.
                </p>

                <p>
                  Notification sent to admin mobile instantly.
                </p>

                <p>
                  Suggested action:
                  Turn OFF unused lights and fans.
                </p>

                {
                  notification && (
                    <div className="notification">
                      {notification}
                    </div>
                  )
                }

              </div>
            </div>
          )
        }

        {/* WEATHER */}
        {
          activePage === "weather" && (
            <div className="page">

              <h1>🌦 Weather Intelligence</h1>

              <div className="bigBox">

                <h2>
                  Current Weather:
                  27°C Sunny
                </h2>

                <p>
                  Hot weather increases fan and AC consumption.
                </p>

                <p>
                  AI uses weather forecasting to predict future load.
                </p>

                <p>
                  Rainy weather reduces cooling energy demand.
                </p>

              </div>
            </div>
          )
        }

        {/* SETTINGS */}
        {
          activePage === "settings" && (
            <div className="page">

              <h1>⚙ IoT Smart Controls</h1>

              <div className="bigBox">

                <button
                  className="onBtn"
                  onClick={() => setLightStatus("ON")}
                >
                  Turn ON Lights
                </button>

                <button
                  className="offBtn"
                  onClick={() => setLightStatus("OFF")}
                >
                  Turn OFF Lights
                </button>

                <h2 style={{ marginTop: "30px" }}>
                  Current Status:
                  {lightStatus}
                </h2>

                <p>
                  Smart IoT automation for classrooms.
                </p>

              </div>
            </div>
          )
        }

      </div>
    </div>
  );
}

export default App;