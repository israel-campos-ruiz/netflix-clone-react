import React from "react";
import useGet from "../hooks/useGet";
import RowItem from "../components/layout/RowItem";
import Loader from "../components/shared/Loader";
import { requests } from "../helpers/request";
import Banner from "../components/layout/Banner";
import '../styles/App.css'
import Navbar from "../components/shared/Navbar";

const Layout = () => {
  const { data, loading } = useGet(requests.fetchTrending);
  return (
    <div className="app">
      {loading && <Loader />}
       {/* navbar */}
       <Navbar />
       <Banner/>
      {data &&(
        <div className="app">
          <RowItem isLargeRow title={"NETFLIX ORIGINALS"} fetchUrl={requests.fetchNetflixOriginals}/>
          <RowItem isLargeRow title={"Trending Now"} fetchUrl={requests.fetchTrending}/>
          <RowItem isLargeRow title={"Top Rated"} fetchUrl={requests.fetchTopRated}/>
          <RowItem isLargeRow title={"Action Movies"} fetchUrl={requests.fetchActionMovies}/>
          <RowItem isLargeRow title={"Comedy Movies"} fetchUrl={requests.fetchComedyMovies}/>
          <RowItem isLargeRow title={"Horror Movies"} fetchUrl={requests.fetchHorrorMovies}/>
          <RowItem isLargeRow title={"Romance Movies"} fetchUrl={requests.fetchRomanceMovies}/>
          <RowItem isLargeRow title={"Documentaries"} fetchUrl={requests.fetchDocumentariesMovies}/>
    
        </div>
      )}
    </div>
  );
};

export default Layout;
