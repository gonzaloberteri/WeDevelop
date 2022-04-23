import React, { SyntheticEvent } from "react";
import Movie from "../types/movie";
import "../styles/material.css";
import { ReactComponent as Share } from "../assets/svg/link.svg";
import { ReactComponent as Bookmark } from "../assets/svg/bookmark.svg";
import { ReactComponent as Dots } from "../assets/svg/dots.svg";
import { deleteMovie } from "../lib/firebase";

type CardProps = {
  movie: Movie;
};

const onError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
  // @ts-ignore
  e.target.src =
    "https://www.2queue.com/2queue/wp-content/uploads/sites/6/tdomf/4299/movie-poster-coming-soon.png";
};

const Card = ({ movie }: CardProps) => (
  <div className="card">
    <div className="media media--16-9">
      <div className="actions">
        <div className="action-icons float-right">
          <i
            className="material-icons action-icon"
            role="button"
            title="Bookmark"
          >
            <Bookmark fill="white"/>
          </i>
          <i className="material-icons action-icon" role="button" title="Share">
            <Share fill="white"/>
          </i>
        </div>
      </div>
      <div className="primary-title">
        <div className="secondary-text">
          {movie.imdbRating}★ - ({movie.Year})
        </div>
        <div className="primary-text">{movie.Title}</div>
      </div>
      <img
        src={movie.Poster}
        onError={onError}
        alt="Movie poster"
        width="640"
        height="426"
      ></img>
    </div>
    <div className="optional-header">
      <div className="thumbnail thumbnail--40x40">
        <img
          src={movie.Poster}
          onError={onError}
          alt=""
          width="40"
          height="40"
        ></img>
      </div>
      <div className="primary-title">
        <div className="title">{movie.Director}</div>
        <div className="subhead">Director</div>
      </div>
      <div className="action-icons">
        <i
          className="material-icons action-icon"
          role="button"
          title="More options"
        >
          <Dots />
        </i>
      </div>
    </div>
    <div className="supporting-text" style={{ minHeight: 96 }}>
      {movie.Plot}
    </div>
    <div className="actions">
      <div className="action-buttons float-right">
        <button className="button" type="button" onClick={e => deleteMovie(e, movie.imdbID)}>
          delete
        </button>
      </div>
    </div>
  </div>
);

export default Card;
