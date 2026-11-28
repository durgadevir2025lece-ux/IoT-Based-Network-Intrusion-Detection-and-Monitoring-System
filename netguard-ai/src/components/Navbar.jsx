
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <span className="logo-icon">🛡️</span>
        <h2>NetGuard AI</h2>
      </div>

      <div className="nav-search">
        <input
          type="text"
          placeholder="Search network..."
        />
      </div>

      <div className="nav-profile">
        <span className="notification">🔔</span>
        <div className="profile-avatar">A</div>
        <span>Admin</span>
      </div>
    </nav>
  );
}

export default Navbar;
