import React from 'react'
import Background from "../assets/login.jpg";
import styled from "styled-components"

export default function BackgroundImage() {
  return (
    <Container>
      <img src={Background} alt="background" />
    </Container>
  )
}

    const Container = styled.div`
       width: 100% ;
       height: 100vh ;
       img {
        height: 100%;
        width: 100%;
       }
       `;
