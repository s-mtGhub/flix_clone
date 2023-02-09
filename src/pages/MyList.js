import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { getUserLikedMovies } from "../store";
import app from "../utils/firbase-config";
import styled from "styled-components";
import Card from "../components/Card";
import NotAvailable from "../components/NotAvailable"

export default function MyList() {      
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authentication = getAuth(app);
  const [isScrolled, setIsScrolled] = useState(false);
  const [email, setEmail] = useState(undefined);
  onAuthStateChanged(authentication, (currentUser) => {
    if (currentUser) setEmail(currentUser.email);
    else navigate("/login");
  });
  
  
  useEffect(() => {
    if(email){
      dispatch(getUserLikedMovies(email));
    }
  },[email]);
  const movies = useSelector((state) => state.netflix.movies);
  // if(movies==)
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };


  return (
    <Container>
      <div className="navbar">
        <Navbar isScrolled={isScrolled} />
      </div>
      <div className="content flex column">
        <h1>MY LIST</h1>
        {
        (movies!==undefined && movies.length>0) ? <div className="grid flex">
            {movies.map((movie,indx)=>{
                return <Card movieData={movie} index={indx} key={movie.id} isLiked={true} />
            })}
        </div>:<NotAvailable msg="in List"/>}
      </div>
    </Container>
  );
}


const Container = styled.div`
  .content {
    margin: 2.3rem;
    margin-top: 8rem;
    gap: 3rem;
    h1 {
      text-align: center;
      color: white;
      ${'' /* margin-top: 4rem; */}
    }
    .grid {
      flex-wrap: wrap;
      gap: 1rem;
    }
  }
`;
