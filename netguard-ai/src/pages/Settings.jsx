
import { useState } from "react";

function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [monitoring, setMonitoring] = useState(true);

  return (
    <div className="page-container">
      <h1>Settings</h1>
      <p>Manage your IoT network security dashboard preferences.</p>

      <div className="dashboard-card">
        <h3>Notification Settings</h3>

        <label>
          <input
            type="checkbox"
            checked={notifications}
            onChange={(e) => setNotifications(e.target.checked)}
          />
          {" "}Enable security notifications
        </label>

        <p>
          Notifications: {notifications ? "Enabled" : "Disabled"}
        </p>
      </div>

      <div className="dashboard-card">
        <h3>Network Monitoring Settings</h3>

        <label>
          <input
            type="checkbox"
            checked={monitoring}
            onChange={(e) => setMonitoring(e.target.checked)}
          />
          {" "}Enable monitoring display
        </label>

        <p>
          Monitoring display: {monitoring ? "Enabled" : "Disabled"}
        </p>
      </div>
    </div>
  );
}

export default Settings
