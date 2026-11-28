
import "./AlertCard.css";

function AlertCard({ title, description, time, severity }) {
  return (
    <div className="alert-card">
      <div className="alert-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <small>{time}</small>
      </div>

      <span className={`severity ${severity.toLowerCase()}`}>
        {severity}
      </span>
    </div>
  );
}

export default AlertCard;
