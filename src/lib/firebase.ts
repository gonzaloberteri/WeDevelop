import { FormEvent } from "react";

const axios = require("axios");

const addMovie = (query: string) => {
  console.log(query);

  if (!query) return;

  axios
    .get(`https://fake-movie-database-api.herokuapp.com/api?s=${query}`)
    .then((res: any) => res.data)
    .then((data: any) => console.log(data.Search[0]));

  return false;
};

export { addMovie };
