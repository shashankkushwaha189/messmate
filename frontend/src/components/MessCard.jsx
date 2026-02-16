export default function MessCard({ mess }) {
  return (
    <div className="card">
      <h3>{mess.name}</h3>
      <p>📍 {mess.location}</p>
      <p>💰 ₹{mess.price}</p>
      <p>⭐ {mess.rating}</p>
    </div>
  );
}
