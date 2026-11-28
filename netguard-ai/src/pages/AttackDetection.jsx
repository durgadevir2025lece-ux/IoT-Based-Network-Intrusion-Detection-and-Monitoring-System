
function AttackDetection() {
  const attacks = [
    {
      id: 1,
      name: "Port Scanning",
      description: "Repeated attempts to access different network ports.",
      status: "Detected",
    },
    {
      id: 2,
      name: "Brute Force Attempt",
      description: "Multiple failed login attempts.",
      status: "Detected",
    },
    {
      id: 3,
      name: "Suspicious Network Traffic",
      description: "Unusual network communication pattern.",
      status: "Under Observation",
    },
  ];

  return (
    <div className="page-container">
      <h1>Attack Detection</h1>
      <p>View possible intrusion patterns in the IoT network.</p>

      {attacks.map((attack) => (
        <div className="dashboard-card" key={attack.id}>
          <h3>{attack.name}</h3>
          <p>{attack.description}</p>
          <p>
            <strong>Status:</strong> {attack.status}
          </p>
        </div>
      ))}

      <p>These attack records are demonstration examples.</p>
    </div>
  );
}

export default AttackDetection
