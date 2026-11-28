

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import NetworkStatus from "./components/NetworkStatus";
import StatCard from "./components/StatCard";
import AlertCard from "./components/AlertCard";
import TrafficChart from "./components/TrafficChart";
import "./App.css";

function Dashboard() {
  return (
    <div>
      <Navbar />

      <div className="dashboard-layout">
        <Sidebar />

        <main className="dashboard-content">
          <h1>Network Security Dashboard</h1>
          <p>Monitor your network activity in real time.</p>

          <NetworkStatus />

          <div className="stats-grid">
            <StatCard
              title="Total Devices"
              value="128"
              icon="💻"
              color="blue"
              description="Connected devices"
            />

            <StatCard
              title="Network Traffic"
              value="2.4 GB"
              icon="🌐"
              color="green"
              description="Current traffic"
            />

            <StatCard
              title="Total Alerts"
              value="24"
              icon="🚨"
              color="red"
              description="Security alerts"
            />

            <StatCard
              title="Threats Blocked"
              value="18"
              icon="🛡️"
              color="purple"
              description="Threats detected"
            />
          </div>

          <TrafficChart />

          <h2>Recent Security Alerts</h2>

          <AlertCard
            title="Suspicious Login Attempt"
            description="Multiple failed login attempts detected."
            time="2 minutes ago"
            severity="High"
          />

          <AlertCard
            title="Unusual Network Traffic"
            description="Unexpected traffic detected."
            time="10 minutes ago"
            severity="Medium"
          />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
