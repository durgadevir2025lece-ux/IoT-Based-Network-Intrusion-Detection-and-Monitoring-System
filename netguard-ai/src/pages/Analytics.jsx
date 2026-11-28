
function Analytics() {
  return (
    <div className="page-container">
      <h1>Network Analytics</h1>
      <p>Analyze IoT network activity and security events.</p>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>Total Network Events</h3>
          <h2>1,250</h2>
          <p>Sample event count</p>
        </div>

        <div className="dashboard-card">
          <h3>Suspicious Events</h3>
          <h2>35</h2>
          <p>Sample suspicious events</p>
        </div>

        <div className="dashboard-card">
          <h3>Blocked Connections</h3>
          <h2>18</h2>
          <p>Sample blocked connections</p>
        </div>

        <div className="dashboard-card">
          <h3>Network Availability</h3>
          <h2>98%</h2>
          <p>Demonstration value</p>
        </div>
      </div>

      <div className="dashboard-card">
        <h3>Security Analysis</h3>
        <p>
          This section summarizes network events, suspicious activity
          and blocked connections to help monitor IoT network security.
        </p>
      </div>
    </div>
  );
}

export default Analytics
