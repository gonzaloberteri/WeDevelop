import React, { useEffect, useState } from "react";
import db from "../config/firebase";
import { ref, onValue } from "firebase/database";
import "../styles/App.css";
import "../styles/searchbox.css";
import Movie from "../types/movie";
import { addMovie } from "../lib/firebase";
import Card from "../components/Card";
import { ToastContainer } from "react-toastify";

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    const moviesRef = ref(db, "movies");
    onValue(moviesRef, (snapshot) => {
      const data: Movie[] = snapshot.val();

      setMovies(data);
    });
  }, []);

  return (
    <div className="center">
      <ToastContainer />
      <form className="form-wrapper cf">
        <input
          type="text"
          placeholder="Search here..."
          id="input"
          required
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <button type="button" onClick={(e) => addMovie(input)}>
          Search
        </button>
      </form>

      {movies && (
        <div className="grid" style={{ marginInline: 30 }}>
          {Object.values(movies).map((m, i) => (
            <Card movie={m} key={m.Title + i} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
