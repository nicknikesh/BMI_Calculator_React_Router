import React, { useState } from "react";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");
  const [color, setColor] = useState("");

  const calculateBMI = () => {
    if (!weight || !height) {
      alert("Please enter both values");
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      setStatus("Underweight");
      setColor("#3498db");
    } else if (bmiValue < 24.9) {
      setStatus("Normal");
      setColor("#2ecc71");
    } else if (bmiValue < 29.9) {
      setStatus("Overweight");
      setColor("#f39c12");
    } else {
      setStatus("Obese");
      setColor("#e74c3c");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        background: "linear-gradient(to right, #667eea, #764ba2)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "30px",
          borderRadius: "15px",
          width: "350px",
          textAlign: "center",
          boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#333" }}>
          BMI Calculator
        </h2>

        <input
          type="number"
          placeholder="Enter weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          style={inputStyle}
        />

        <input
          type="number"
          placeholder="Enter height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          style={inputStyle}
        />

        <button onClick={calculateBMI} style={buttonStyle}>
          Calculate BMI
        </button>

        {bmi && (
          <div style={{ marginTop: "20px" }}>
            <h3>Your BMI: {bmi}</h3>
            <h3 style={{ color: color }}>Status: {status}</h3>
          </div>
        )}
      </div>
    </div>
  );
}

const inputStyle = {
  width: "90%",
  padding: "10px",
  margin: "10px 0",
  borderRadius: "8px",
  border: "1px solid #ccc",
  outline: "none",
};

const buttonStyle = {
  marginTop: "10px",
  padding: "10px 20px",
  border: "none",
  borderRadius: "8px",
  background: "#667eea",
  color: "white",
  fontSize: "16px",
  cursor: "pointer",
  transition: "0.3s",
};

export default App;