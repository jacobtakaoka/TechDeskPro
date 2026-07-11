import { useEffect, useState } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


function App() {
  const [apiMessage, setApiMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/health")
      .then((res) => res.json())
      .then((data) => setApiMessage(data.message))
      .catch((err) => {
        console.error("Error connecting to backend:", err);
        setApiMessage("Could not connect to backend");
      });
  }, []);

  return (
    <main>
      <h1>TechDesk Pro</h1>
      <p>IT support ticketing system coming soon.</p>

      <h2>API Status</h2>
      <p>{apiMessage}</p>
    </main>
  );
}

export default App;