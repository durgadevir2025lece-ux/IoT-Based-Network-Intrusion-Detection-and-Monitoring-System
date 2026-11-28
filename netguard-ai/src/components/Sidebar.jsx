
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const menuItems = [
    { name: "Dashboard", path: "/" },
    { name: "Network Monitoring", path: "/monitoring" },
    { name: "IoT Devices", path: "/devices" },
    { name: "Intrusion Alerts", path: "/alerts" },
    { name: "Attack Detection", path: "/detection" },
    { name: "Analytics", path: "/analytics" },
    { name: "Settings", path: "/settings" },
    { name: "Help Center", path: "/help" },
  ];

  return (
    <aside className="sidebar">
      <h2>NetGuard AI</h2>
      <p>IoT Security System</p>

      <nav>
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;


