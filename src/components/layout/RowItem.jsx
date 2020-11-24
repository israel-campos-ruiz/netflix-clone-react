import React, { useEffect, useState } from "react";
import useGet from "../../hooks/useGet";
import { URL_POSTER } from "../../helpers/request";
import '../../styles/components/layout/Row.css'
import YouTube from "react-youtube";
import movieTrailer  from 'movie-trailer'
const RowItem = React.memo(({ title, fetchUrl, isLargeRow }) => {
  const opts = {
    height:"390",
    width:"100%",
    playersVars:{
      autoPlay:1
    }
  }
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('')
  const { data } = useGet(fetchUrl);
  useEffect(() => {
    setMovies(data && data.results);
  }, [movies, data]);

  const handleClick = (movie) => {
    if(trailerUrl){
      setTrailerUrl("")
    }else{
      movieTrailer(movie?.name || "")
      .then(url => {
        console.log(url);
        const urlParams = new URLSearchParams(new URL(url).search)
        setTrailerUrl( urlParams.get('v'))
      })
      .catch(error => console.log(error));
    }
  }
  return (
    <div className="row">
      <h2 style ={{marginTop:'10px'}}>{title}</h2>
      <div className="row__posters">
        {movies &&
          movies.map((movie) => (
            <img
              onClick ={()=>handleClick(movie)}
              key={movie.id}
              className={`row__posters__images ${isLargeRow && "row__posterLarge"}`}
              src={`${URL_POSTER}${ isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.poster_path}
            />
          ))}
      </div>
      { trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
});
export default RowItem;
