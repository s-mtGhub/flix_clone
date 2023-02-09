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
export default function Movies() {
 
  const authentication = getAuth(app);
  const [isScrolled, setIsScrolled] = useState(false);
  const movies = useSelector((state) => state.netflix.movies);
  const genres = useSelector((state) => state.netflix.genres);
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
  const navigate=useNavigate(); //#########################
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGenres());   
  }, []);
  useEffect(() => {
    if (genresLoaded) dispatch(fetchMovies({type: "movie" }));               //#########################
  },[genresLoaded]);

  //##########################################
  onAuthStateChanged(authentication, (currentUser) => {   
    if (!currentUser) navigate("/login");                 
    
  });                                                    
 //########################################
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return <Container>
     <div className="navbar">
       <Navbar isScrolled={isScrolled} />
     </div>
     <div className="data">
      <h1 className="not-available">MOVIES</h1>
     <SelectGenre genres={genres} type="movie" />
      {
        (movies!==undefined && movies.length>0) ? <Slider movies={movies}  /> : <NotAvailable />
      }
     </div>
  </Container>  
}



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