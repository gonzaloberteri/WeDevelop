import { ref, push, set } from "firebase/database";
import db from "../config/firebase";
import Movie from "../types/movie";

const axios = require("axios");

const addMovie = (query: string) => {
  if (!query) return;

  axios
    .get(`https://www.omdbapi.com/?apikey=5960e495&t=${query}`)
    .then((res: any) => res.data)
    .then((movie: Movie) => {
      const newRef = push(ref(db, "movies"));
      set(newRef, movie);
    });
};

export { addMovie };
