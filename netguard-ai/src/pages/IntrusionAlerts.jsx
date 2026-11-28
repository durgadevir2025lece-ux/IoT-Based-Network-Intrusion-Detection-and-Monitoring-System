
function IntrusionAlerts() {
  const alerts = [
    {
      id: 1,
      type: "Unauthorized Access",
      device: "Smart Camera",
      severity: "High",
      time: "10:30 AM",
    },
    {
      id: 2,
      type: "Suspicious Traffic",
      device: "IoT Gateway",
      severity: "Medium",
      time: "11:15 AM",
    },
    {
      id: 3,
      type: "Repeated Login Failure",
      device: "Temperature Sensor",
      severity: "High",
      time: "12:05 PM",
    },
  ];

  return (
    <div className="page-container">
      <h1>Intrusion Alerts</h1>
      <p>View suspicious activities detected in the IoT network.</p>

      {alerts.map((alert) => (
        <div className="dashboard-card" key={alert.id}>
          <h3>{alert.type}</h3>
          <p>Device: {alert.device}</p>
          <p>Severity: {alert.severity}</p>
          <p>Time: {alert.time}</p>
        </div>
      ))}

      <p>These are sample alerts for demonstration.</p>
    </div>
  );
}

export default IntrusionAlerts
