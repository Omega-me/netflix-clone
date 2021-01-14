import React, { useEffect, useState } from 'react';
import './Row.css';
import axios from '../axios';
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer';

const base_Url = 'https://image.tmdb.org/t/p/original';


const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  const [trailerUrl, setTrailerUrl] = useState('');


  useEffect(
    () => {
      async function fetchData() {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
        return request;
      }
      fetchData();
    },
    [
      fetchUrl,
    ] /*we pas the fetchYrl variable here because every time we use a variable that is outside from our file when we are using useEffect we need to add as e dependency to useEffect Array because every time that variable change need to run the function that is on useEffect state */
  );


  //getting a trailer url from youtube based on the movie name , not all movies have trailer using the movie-trailer react library
  const getTrailerUrl = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.name || '').then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get('v'));
      }).catch((error) => console.log(error));
    }
  }

  const opts = {
    height: '390',
    width: '100%',
    transorm: 'translate(-50%)',
    playerVars: {
      autoplay: 1,
    },
  };

  return (

    <div className='row'>
      <h2>{title}</h2>

      <div className='row__posters'>
        {movies.map(movie => (
          <img
            onClick={() => getTrailerUrl(movie)}
            className={`row__poster ${isLargeRow && 'row__posterLarge'} `}
            key={movie.id}
            src={`${base_Url}${isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
            alt={movie?.name || movie?.original_title}
          />
        ))}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
