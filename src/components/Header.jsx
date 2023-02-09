import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import logo from "../assets/logo.png"
import logo2 from "../assets/logo2.mp4"

export default function Header(props) {

  const navigate=useNavigate();
  return (
    <Container className="flex a-center j-between">
      <div className="logo">
        {/* <img src={logo} alt="logo" /> */}
        <video src={logo2} autoPlay loop muted/>
      </div>
      {props.btn && (
        <button
          onClick={() =>
            navigate(props.login ? "/login" : "/signup")
          }
        >
          {props.login ? "Log In" : "Sign up"}
        </button>
      )}
    </Container>
  );
}


const Container = styled.div`
  padding: 0 2rem;
  .logo {
    img {
      height: 5rem;
    }
    video {
      height: 4rem;
      border-radius: 20rem;
    }
  }
  button {
    padding: 0.5rem 1rem;
    background-color: #e50914;
    border: none;
    cursor: pointer;
    color: white;
    border-radius: 0.2rem;
    font-weight: bolder;
    font-size: 1.05rem;
  }
`;