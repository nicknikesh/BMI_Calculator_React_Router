# Ex06 BMI Calculator
## Date: 19-03-2026

## AIM
To develop a responsive and interactive Body Mass Index (BMI) Calculator using React that allows users to input their height and weight, and calculates their BMI to categorize their health status (e.g., Underweight, Normal, Overweight, Obese).

## DESIGN STEPS

### STEP 1: Initialize React Project

<li>Create a new React app using create-react-app.</li>
<li>Install React Router using:</li>
npm install react-router-dom

### STEP 2: Set Up Routing

Create routing structure with react-router-dom:

<li>Home route (/) – Intro or Navigation</li>

<li>BMI Calculator route (/bmi)</li>

<li>Result route (/result)</li>

### STEP 3: Design the BMI Form Page

<li>Create a form to accept Height (in cm or m) and Weight (in kg).</li>

<li>On form submit, navigate to the result page with entered values via URL query params or context/state.</li>

## STEP 4: Handle Input Validation

<li>Check if height and weight are valid numbers.</li>

<li>Optionally, show error messages for invalid inputs.</li>

### STEP 5: Perform BMI Calculation

<li>In the result component:

<li>Extract height and weight from the route (URL or passed state).</li>

<li>Apply the BMI formula:</li>

![image](https://github.com/user-attachments/assets/ec785506-c96b-489e-8783-fb1a5d36101a)
​
 
<li>Convert height from cm to m if needed.</li></li>

### STEP 6: Display Result

<li>Show calculated BMI.</li>

<li>Show category based on BMI range:

<li>Underweight, Normal, Overweight, Obese, etc.</li></li>

### STEP 7: Navigation Options

<li>Provide a button to go back to the BMI form to calculate again.</li>

### STEP 8: Enhancements

<li>Add styling using CSS or Tailwind.</li>

## PROGRAM
App.jsx
```
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
```
Main.jsx
```
import React from "react";
import ReactDOM from "react-dom/client";
import BMICalculator from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BMICalculator />
  </React.StrictMode>
);
```
calci.jsx
```
import React, { useState } from "react";

function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");

  const calculateBMI = () => {
    if (!weight || !height) {
      alert("Please enter both values");
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    setBmi(bmiValue);

    if (bmiValue < 18.5) setStatus("Underweight");
    else if (bmiValue >= 18.5 && bmiValue < 24.9) setStatus("Normal");
    else if (bmiValue >= 25 && bmiValue < 29.9) setStatus("Overweight");
    else setStatus("Obese");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>BMI Calculator</h2>

      <input
        type="number"
        placeholder="Enter weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <br /><br />

      <input
        type="number"
        placeholder="Enter height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <br /><br />

      <button onClick={calculateBMI}>Calculate BMI</button>

      {bmi && (
        <div>
          <h3>Your BMI: {bmi}</h3>
          <h3>Status: {status}</h3>
        </div>
      )}
    </div>
  );
}

export default BMICalculator;
```


## OUTPUT

<img width="1890" height="1065" alt="Screenshot 2026-03-19 100828" src="https://github.com/user-attachments/assets/3fa79600-e2d8-49e0-a12c-9c89eacc2be2" />



## RESULT
The BMI Calculator successfully takes user input for height and weight, performs the BMI calculation in real-time using React state and event handling, and displays the BMI value along with the corresponding health category.
