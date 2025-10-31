import React from "react";
import { useNavigate } from "react-router-dom";

export default function Success() {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={{ color: "#4BFF88" }}>✅ Payment Successful!</h1>
        <p style={{ marginTop: 10 }}>
          Thank you for upgrading to <strong>Taskify Premium</strong>!
        </p>
        <p style={{ marginTop: 5 }}>
          You now have access to all premium features. 🎉
        </p>
        <button style={styles.btn} onClick={() => navigate("/")}>
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#0b1020",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Poppins', sans-serif",
    color: "#fff",
  },
  card: {
    background: "rgba(255,255,255,0.05)",
    borderRadius: 12,
    padding: 40,
    textAlign: "center",
    boxShadow: "0 0 12px rgba(0,0,0,0.4)",
  },
  btn: {
    marginTop: 20,
    background: "#4B7CFF",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: 8,
    cursor: "pointer",
    fontSize: 16,
  },
};
