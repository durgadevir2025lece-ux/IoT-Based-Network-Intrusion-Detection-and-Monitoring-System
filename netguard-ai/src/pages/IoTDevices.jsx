
function IoTDevices() {
  const devices = [
    { id: 1, name: "Temperature Sensor", ip: "192.168.1.10", status: "Online" },
    { id: 2, name: "Smart Camera", ip: "192.168.1.11", status: "Online" },
    { id: 3, name: "Motion Sensor", ip: "192.168.1.12", status: "Offline" },
    { id: 4, name: "Smart Gateway", ip: "192.168.1.13", status: "Online" },
  ];

  return (
    <div className="page-container">
      <h1>IoT Devices</h1>
      <p>View registered devices connected to the IoT network.</p>

      <div className="dashboard-card">
        <h3>Registered IoT Devices</h3>

        <table className="device-table">
          <thead>
            <tr>
              <th>Device Name</th>
              <th>IP Address</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {devices.map((device) => (
              <tr key={device.id}>
                <td>{device.name}</td>
                <td>{device.ip}</td>
                <td>{device.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>These are demonstration devices, not live network connections.</p>
      </div>
    </div>
  );
}

export default IoTDevices
