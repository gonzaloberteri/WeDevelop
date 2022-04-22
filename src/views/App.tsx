import React, { useEffect, useState } from "react";
import "../styles/App.css";
import db from "../config/firebase";
import { ref, onValue } from "firebase/database";
import { Carousel } from "../components/Carousel";
import Movie from "../types/movie";

function App() {
  const [movies, setMovies] = useState<Movie[]>();

  useEffect(() => {
    const moviesRef = ref(db, "movies");
    onValue(moviesRef, (snapshot) => {
      const data: Movie[] = snapshot.val();
      setMovies(data);
    });
  });

  console.log(movies);
  

  return <Carousel movies={movies} />;
}

export default App;
