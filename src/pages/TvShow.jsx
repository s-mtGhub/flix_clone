import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import NotAvailable from "../components/NotAvailable";
import { fetchMovies, getGenres } from "../store";
import app from "../utils/firbase-config";
import styled from "styled-components";
import Slider from "../components/Slider";
import SelectGenre from "../components/SelectGenre";
import { useNavigate } from "react-router-dom";
export default React.memo( function TvShow() {
  const navigate=useNavigate();
  const authentication = getAuth(app);
  const [isScrolled, setIsScrolled] = useState(false);
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.netflix.movies);
  const genres = useSelector((state) => state.netflix.genres);
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
  useEffect(() => {
    dispatch(getGenres());
  },[]);
  useEffect(() => {    
    if (genresLoaded) dispatch(fetchMovies({ type: "tv" }));
  },[genresLoaded]);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  onAuthStateChanged(authentication, (currentUser) => {
    if (!currentUser) navigate("/login");

  });

  return <Container>
     <div className="navbar">
       <Navbar isScrolled={isScrolled} />
     </div>
     <div className="data">
     <h1 className="not-available">TV SHOWS</h1>
     <SelectGenre genres={genres} type="tv" />
      {
        (movies!==undefined && movies.length>0) ? <Slider movies={movies}  /> : <NotAvailable />
      }
     </div>
  </Container>  
}
)


const Container=styled.div`
.data{
  margin-top: 8rem;
  .not-available{
    text-align: center;
    color: white;
    margin-top: 4rem;
  }
}


`;