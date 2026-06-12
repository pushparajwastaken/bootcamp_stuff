import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [secondsPassed, setSecondsPassed] = useState(0);
  let interval = useRef(0);
  function startClock() {
    interval.current = setInterval(() => {
      setSecondsPassed((s) => s + 1);
    }, 1000);
  }
  function stopClock() {
    clearInterval(interval.current);
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={startClock}>Start Clock</button>
        <button onClick={stopClock}>Stop Clock</button>
      </div>
      <div style={{ fontSize: 100 }}>{secondsPassed}s</div>
    </div>
  );
}

export default App;
