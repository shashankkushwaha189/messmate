import { useEffect, useState } from "react";
import API from "../api";

export default function Dashboard() {
  const [messes, setMesses] = useState([]);
  const [form, setForm] = useState({
    name: "",
    location: "",
    price: "",
    rating: ""
  });

  const fetchMesses = async () => {
    try {
      const res = await API.get("/messes");
      setMesses(res.data);
    } catch {
      alert("Error loading messes");
    }
  };

  useEffect(() => {
    fetchMesses();
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/messes", form);
      setForm({ name: "", location: "", price: "", rating: "" });
      fetchMesses();
    } catch {
      alert("Error adding mess");
    }
  };

  const deleteMess = async (id) => {
    try {
      await API.delete(`/messes/${id}`);
      fetchMesses();
    } catch {
      alert("Error deleting mess");
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-title"> Dashboard 🍱</div>

      {/* Add Mess Form */}
      <div className="form-card">
        <h3>Add New Mess</h3>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Mess Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            name="location"
            placeholder="Location"
            value={form.location}
            onChange={handleChange}
            required
          />
          <input
            name="price"
            type="number"
            placeholder="Price"
            value={form.price}
            onChange={handleChange}
            required
          />
          <input
            name="rating"
            type="number"
            placeholder="Rating"
            value={form.rating}
            onChange={handleChange}
            required
          />

          <button type="submit">Add Mess</button>
        </form>
      </div>

      {/* Mess List Grid */}
      <div className="mess-grid">
        {messes.map((mess) => (
          <div key={mess._id} className="mess-card">
            <h3>{mess.name}</h3>
            <p>📍 {mess.location}</p>
            <p>💰 ₹{mess.price}</p>
            <p>⭐ {mess.rating}</p>

            <button
              className="delete-btn"
              onClick={() => deleteMess(mess._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
