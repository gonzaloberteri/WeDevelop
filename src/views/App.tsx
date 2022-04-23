import React, { useEffect, useState } from "react";
import db from "../config/firebase";
import { ref, onValue } from "firebase/database";
import "../styles/App.css";
import "../styles/searchbox.css";
import Movie from "../types/movie";
// @ts-ignore
import { Carousel } from "3d-react-carousal";
import { addMovie } from "../lib/firebase";

function App() {
  const [movies, setMovies] = useState<Movie[]>();
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
      <Carousel
        slides={(movies || []).map((m, i) => (
          <div
            key={m.name + i}
            style={{ minHeight: 400, minWidth: 400, backgroundColor: "red" }}
          >
            <img src="https://media.istockphoto.com/photos/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-picture-id1093110112?k=20&m=1093110112&s=612x612&w=0&h=3OhKOpvzOSJgwThQmGhshfOnZTvMExZX2R91jNNStBY=" />
            <p className="legend">{m.name}</p>
          </div>
        ))}
      />
    </div>
  );
}

export default App;
