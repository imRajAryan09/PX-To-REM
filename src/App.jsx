import React, { useState } from "react";
import "./mudit.css";

function App() {
  const [rem, setRem] = useState(1);
  const [px, setpx] = useState(16);
  return (
    <div className="app">
      <div className="header">
        <h1>PX to REM Converter</h1>
      </div>
      <div className="conversion">
        <div className="value">
          <form action="" className="form">
            <input
              type="text"
              name="px"
              value={px}
              format="technical"
              onChange={(e) => {
                setpx(e.target.value);
                setRem((e.target.value / 16).toFixed(3));
              }}
            />
            <span>px</span>
          </form>
        </div>
        <div className="answer">
          <p>{rem} <span>rem</span></p>
        </div>
      </div>
    </div>
  );
}

export default App;
