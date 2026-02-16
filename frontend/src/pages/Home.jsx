import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="hero">
        <h1>Find the Best Mess Near You</h1>
        <p>Affordable, hygienic & delicious food at your fingertips 🍽️</p>

        <button
          className="btn btn-primary"
          onClick={() => navigate("/signup")}
        >
          Get Started
        </button>

        <button
          className="btn btn-outline"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      </div>

      <div className="features">
        <div className="feature-card">
          <h3>📍 Nearby Mess</h3>
          <p>Discover mess options based on your location.</p>
        </div>

        <div className="feature-card">
          <h3>💰 Affordable Pricing</h3>
          <p>Compare prices and choose what fits your budget.</p>
        </div>

        <div className="feature-card">
          <h3>⭐ Ratings & Reviews</h3>
          <p>Check real reviews before selecting your mess.</p>
        </div>
      </div>
    </>
  );
}
