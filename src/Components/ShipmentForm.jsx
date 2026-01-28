import { useEffect, useState } from "react";
import "../CSS/index.css";

const API_BASE = "https://pythonfastapi-production-5915.up.railway.app";

export default function ShipmentForm() {
  const [form, setForm] = useState({
    item: "",
    quantity: "",
    status: "",
    order_date: "",
  });

  const [shipments, setShipments] = useState([]);
  const [onlyDuplicates, setOnlyDuplicates] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 🔹 Load ALL shipments
 const loadShipments = async () => {
  try {
    console.log("LOADING SHIPMENTS...");

    const res = await fetch(
      "https://pythonfastapi-production-5915.up.railway.app/shipment"
    );

    if (!res.ok) {
      throw new Error(`GET failed: ${res.status}`);
    }

    const data = await res.json();
    console.log("GET RESPONSE:", data);

    // 🔑 THIS IS THE FIX
    setShipments(Array.isArray(data.items) ? data.items : []);
  } catch (err) {
    console.error("LOAD FAILED:", err);
    setShipments([]);
  }
};



  useEffect(() => {
    loadShipments();
  }, []);

  // 🔹 Create shipment
  const submit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.item || !form.quantity || !form.status || !form.order_date) {
      setError("All fields are required");
      return;
    }

    const date = new Date(form.order_date);
    if (isNaN(date.getTime())) {
      setError("Invalid date");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(`${API_BASE}/shipments/check-duplicate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          item: form.item,
          quantity: Number(form.quantity),
          status: form.status,
          order_date: date.toISOString(),
        }),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text);
      }

      const result = await res.json();
console.log("POST RESULT:", result);

// ADD TO STATE DIRECTLY
if (result.shipment) {
  setShipments((prev) => [...prev, result.shipment]);
}

setForm({ item: "", quantity: "", status: "", order_date: "" });
    } catch (err) {
      console.error(err);
      setError("Failed to create shipment");
    } finally {
      setLoading(false);
    }
  };

  const filtered = onlyDuplicates
    ? shipments.filter((s) => s.is_duplicate)
    : shipments;

 return (
  <div className="shipment-page">
    <h2 className="title">📦 Shipment Manager with Duplicate Detection</h2>

    <div className="card">
      <h3>Create Shipment</h3>

      <form className="form-grid" onSubmit={submit}>
        <input
          placeholder="Item"
          value={form.item}
          onChange={(e) => setForm({ ...form, item: e.target.value })}
        />

        <input
          type="number"
          placeholder="Quantity"
          value={form.quantity}
          onChange={(e) => setForm({ ...form, quantity: e.target.value })}
        />

        <input
          placeholder="Status"
          value={form.status}
          onChange={(e) => setForm({ ...form, status: e.target.value })}
        />

        <input
          type="datetime-local"
          value={form.order_date}
          onChange={(e) =>
            setForm({ ...form, order_date: e.target.value })
          }
        />

        <button className="primary-btn" type="submit">
          Create Shipment
        </button>
      </form>
    </div>

    <div className="card">
      <div className="table-header">
        <h3>Shipments</h3>
        <button className="secondary-btn" onClick={() => setOnlyDuplicates(!onlyDuplicates)}>
          {onlyDuplicates ? "Show All" : "Show Duplicates"}
        </button>
      </div>

      <table className="styled-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Item</th>
            <th>Qty</th>
            <th>Status</th>
            <th>Duplicate</th>
          </tr>
        </thead>
        <tbody>
          {filtered.length === 0 ? (
            <tr>
              <td colSpan="5" className="empty">
                No shipments found
              </td>
            </tr>
          ) : (
            filtered.map((s) => (
              <tr key={s.id} className={s.is_duplicate ? "dup-row" : ""}>
                <td>{s.id}</td>
                <td>{s.item}</td>
                <td>{s.quantity}</td>
                <td>{s.status}</td>
                <td>{s.is_duplicate ? "🚨 Duplicate" : "✅ OK"}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  </div>
);

}

