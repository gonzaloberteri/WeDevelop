import { ref, push, set, onValue } from "firebase/database";
import db from "../config/firebase";
import Movie from "../types/movie";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const addMovie = (query: string) => {
  if (!query) return;

  const promise = axios
    .get(`https://www.omdbapi.com/?apikey=5960e495&t=${query}`)
    .then((res: any) => res.data)
    .then((movie: Movie) => {
      console.log(movie);

      if (movie.Response === "False") return Promise.reject(new Error("error"));

      const newRef = push(ref(db, "movies"));
      set(newRef, movie);
    });

  toast.promise(promise, {
    pending: "Searching movie in https://www.omdbapi.com",
    success: "Movie found!",
    error: "Movie not found.",
  });
};

// @ts-ignore
const deleteMovie = (
  // @ts-ignore
  event: MouseEvent<HTMLButtonElement, MouseEvent>,
  movieId: string
) => {
  console.log(event.target.id);

  const moviesRef = ref(db, "movies");
  onValue(moviesRef, (snapshot) => {
    const data: Movie[] = snapshot.val();

    const keyIndex = Object.values(data).findIndex((m) => m.imdbID === movieId);

    if (!keyIndex) return;

    const key = Object.keys(data)[keyIndex];

    const movieRef = ref(db, `movies/${key}`);
    set(movieRef, null);
  });
};

export { addMovie, deleteMovie };
