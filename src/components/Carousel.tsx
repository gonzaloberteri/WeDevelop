import React, { useEffect, useMemo } from "react"; // we need this to make JSX compile
// @ts-ignore
import { Carousel3D } from "carousel3d/dist/Carousel3D";
import "carousel3d/dist/Carousel3D.css";
import Movie from "../types/movie";

type CarouselProps = {
  movies: Movie[] | undefined;
};

export const Carousel = ({ movies }: CarouselProps) => {
  var car = useMemo(() => new Carousel3D(), []);
  car.containerName = "container";

  useEffect(() => {
    var tileElements = [];

    if (!movies) {
      console.log("no movies found!");

      return;
    }

    for (var i = 0; i < movies?.length; i++) {
      var numberElement = document.createElement("div");
      numberElement.textContent = movies[i].rate.toString();
      tileElements.push(numberElement);
    }

    car.tileElements = tileElements;
    car.init();
  });

  return <div id="container"></div>;
};
