import "./NetworkStatus.css";

function NetworkStatus() {
  return (
    <div className="network-status">
      <div>
        <h3>Network Monitoring Status</h3>
        <p>Your network is being monitored</p>
      </div>

      <div className="status-indicator">
        <span className="status-dot"></span>
        Monitoring Active
      </div>
    </div>
  );
}

export default NetworkStatus;