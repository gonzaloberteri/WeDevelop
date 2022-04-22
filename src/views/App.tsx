import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import "../styles/App.css";
import db from "../config/firebase";
import { ref, onValue } from "firebase/database";

function App() {
  const [movies, setMovies] = useState<Response>();

  useEffect(() => {
    const starCountRef = ref(db, "movies");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
