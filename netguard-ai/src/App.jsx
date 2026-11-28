
import { Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import DashboardPage from "./pages/DashboardPage";
import NetworkMonitoring from "./pages/NetworkMonitoring";
import IoTDevices from "./pages/IoTDevices";
import IntrusionAlerts from "./pages/IntrusionAlerts";
import AttackDetection from "./pages/AttackDetection";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import HelpCenter from "./pages/HelpCenter";

function App() {
  return (
    <div className="app-container">
      <Sidebar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/monitoring" element={<NetworkMonitoring />} />
          <Route path="/devices" element={<IoTDevices />} />
          <Route path="/alerts" element={<IntrusionAlerts />} />
          <Route path="/detection" element={<AttackDetection />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App


