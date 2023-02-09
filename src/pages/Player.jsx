import React from 'react'
import styled from 'styled-components'
import { BsArrowLeft} from "react-icons/bs"
import vido from "../assets/video.mp4"
import { useNavigate } from 'react-router-dom'

export default  function Player() {
    const navigate=useNavigate();

  return (
    <Container>
        <div className="player">
            <div className="back">
                <BsArrowLeft onClick={()=>navigate(-1)} />
            </div>
            <video src={vido}  autoPlay loop controls muted></video>
        </div>
    </Container>    
  )
}



const Container=styled.div`
.player{
    width: 100vw;
    height: 100vh;
    .back{
        position:absolute;
        padding: 2rem;
        z-index: 1;
        &:hover{
            svg{
            font-size:4rem;
            transition: 0.5s ease-in-out;

            }
        }
        svg{
            font-size:3rem;
            cursor: pointer;
        }
    }
    video{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
}



`;