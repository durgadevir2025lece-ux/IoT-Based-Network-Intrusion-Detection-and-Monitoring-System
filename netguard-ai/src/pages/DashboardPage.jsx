
import "./Pages.css";

function DashboardPage() {
  return (
    <div className="page-container">
      <h1>Network Security Dashboard</h1>
      <p>Monitor your IoT network security from one place.</p>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>Total IoT Devices</h3>
          <h2>25</h2>
          <p>Registered devices (demo data)</p>
        </div>

        <div className="dashboard-card">
          <h3>Network Status</h3>
          <h2>Active</h2>
          <p>Demo status</p>
        </div>

        <div className="dashboard-card">
          <h3>Intrusion Alerts</h3>
          <h2>08</h2>
          <p>Sample alerts</p>
        </div>

        <div className="dashboard-card">
          <h3>Threats Detected</h3>
          <h2>03</h2>
          <p>Sample detection data</p>
        </div>
      </div>

      <div className="dashboard-card">
        <h3>System Overview</h3>
        <p>
          This dashboard provides an overview of IoT devices,
          network activity, intrusion alerts and security status.
        </p>
      </div>
    </div>
  );
}

export default DashboardPage
