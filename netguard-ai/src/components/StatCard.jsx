
import "./StatCard.css";

function StatCard({ title, value, icon, color, description }) {
  return (
    <div className="stat-card">
      <div className="stat-card-top">
        <div>
          <p className="stat-title">{title}</p>
          <h2 className="stat-value">{value}</h2>
        </div>

        <div className={`stat-icon ${color}`}>
          {icon}
        </div>
      </div>

      <p className="stat-description">{description}</p>
    </div>
  );
}

export default StatCard
