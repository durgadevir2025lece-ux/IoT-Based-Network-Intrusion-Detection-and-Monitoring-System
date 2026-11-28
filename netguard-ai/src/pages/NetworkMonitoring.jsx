
function NetworkMonitoring() {
  return (
    <div className="page-container">
      <h1>Network Monitoring</h1>
      <p>Monitor network traffic and connection activity.</p>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>Incoming Traffic</h3>
          <h2>125 Mbps</h2>
          <p>Sample traffic data</p>
        </div>

        <div className="dashboard-card">
          <h3>Outgoing Traffic</h3>
          <h2>85 Mbps</h2>
          <p>Sample traffic data</p>
        </div>

        <div className="dashboard-card">
          <h3>Connected Devices</h3>
          <h2>25</h2>
          <p>Demo device count</p>
        </div>

        <div className="dashboard-card">
          <h3>Network Status</h3>
          <h2>Active</h2>
          <p>Demo status</p>
        </div>
      </div>
    </div>
  );
}

export default NetworkMonitoring
