
function HelpCenter() {
  return (
    <div className="page-container">
      <h1>Help Center</h1>
      <p>Information about using the NetGuard AI system.</p>

      <div className="dashboard-card">
        <h3>1. What is NetGuard AI?</h3>
        <p>
          NetGuard AI is an IoT Based Network Intrusion Detection
          and Monitoring System designed to monitor network activity
          and identify suspicious behaviour.
        </p>
      </div>

      <div className="dashboard-card">
        <h3>2. What is Network Monitoring?</h3>
        <p>
          Network monitoring helps observe incoming and outgoing
          traffic and connected IoT devices.
        </p>
      </div>

      <div className="dashboard-card">
        <h3>3. What are Intrusion Alerts?</h3>
        <p>
          Intrusion alerts provide information about suspicious
          network activities and possible security threats.
        </p>
      </div>

      <div className="dashboard-card">
        <h3>4. What is Attack Detection?</h3>
        <p>
          Attack detection identifies suspicious patterns such as
          port scanning and repeated login failures.
        </p>
      </div>
    </div>
  );
}

export default HelpCenter
