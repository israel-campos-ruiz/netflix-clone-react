import React, { useEffect, useState } from "react";
import axios from "axios";
import { requests, URL_POSTER } from "../../helpers/request";
import '../../styles/components/layout/Banner.css'
const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setInterval(() => {
        setMovie( request.data.results[Math.floor(Math.random() * request.data.results.length - 1 )]                            
        );
      }, 8000);      
    };
    fetchData();
    return () => {
       
    }
   }, []);
   function truncate(str,n){
       return str?.length > n ? str.substr(0, n-1) + "..." : str;
   }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${URL_POSTER}${movie?.backdrop_path})`,
        backgroundPosition: "center center",
        transitionTimingFunction: "ease-in-out",
        transition: "all 0.8s",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className ="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My list</button>
        </div>
        {/* description */}
        <h1 className="banner__description">
            {truncate(movie?.overview, 200)}
        </h1>


      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
};

export default Banner;
