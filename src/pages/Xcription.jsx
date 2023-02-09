import React, { useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsArrowLeft, BsArrowLeftCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Xcription() {
  const [std_no, set_std] = useState(0);
  const navigate = useNavigate();
  let cost=[199,499,649];

  return (
    <Container>
      <div className="back" title="Go Back">
        <BsArrowLeftCircle onClick={() => navigate(-1)} />
      </div>
      <div className="ads">
        <h2>Choose plan for the uninteruppted services</h2>
        <div className="point">
          <AiOutlineCheckCircle />
          <h4>Watch all you want. Ad-free.</h4>
        </div>
        <div className="point">
          <AiOutlineCheckCircle />
          <h4>Recommendations just for you.</h4>
        </div>
        <div className="point">
          <AiOutlineCheckCircle />
          <h4>Change or cancel your plan anytime.</h4>
        </div>
      </div>
      <div className="quality">
        <div className="choice desc">
          <div className="h_ead" style={{ backgroundColor: "black" }}></div>
          <div className="content">
            <li>Monthly price</li>
            <li>Video quality</li>
            <li>Resolution</li>
          </div>
        </div>
        <div className="choice basic" onClick={() => set_std(0)}>
          <div
            className="h_ead"
            style={{ backgroundColor: std_no == 0 ? "red" : "" }}
          >
            <h3>Basic</h3>
          </div>
          <div className="content" style={{ color: std_no == 0 ? "red" : "" }}>
            <li>
              {" "}
              <span>&#8377;</span> {cost[0]}
            </li>
            <li>Good</li>
            <li>720p</li>
          </div>
        </div>
        <div className="choice medium" onClick={() => set_std(1)}>
          <div
            className="h_ead"
            style={{ backgroundColor: std_no == 1 ? "red" : "" }}
          >
            <h3>Medium</h3>
          </div>
          <div className="content" style={{ color: std_no == 1 ? "red" : "" }}>
            <li>
              {" "}
              <span>&#8377;</span> {cost[1]}
            </li>
            <li>Better</li>
            <li>1080p</li>
          </div>
        </div>
        <div className="choice premium" onClick={() => set_std(2)}>
          <div
            className="h_ead"
            style={{ backgroundColor: std_no == 2 ? "red" : "" }}
          >
            <h3>Premium</h3>
          </div>
          <div className="content" style={{ color: std_no == 2 ? "red" : "" }}>
            <li>
              <span>&#8377;</span> {cost[2]}
            </li>
            <li>Best</li>
            <li>4K+HDR</li>
          </div>
        </div>
      </div>
      <div className="features"></div>

      <div className="nextButton">
        <button onClick>
          <b>Next</b>
        </button>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  .back {
    width:3rem;
    height:3rem;
    margin-left: 1.5rem;
    margin-top: 2rem;
    font-size: 2rem;
    &:hover {
      font-size: 2.2rem;
    }
  }

  .ads {
    margin-left: 3rem;
    .point {
      display: flex;
      margin-left: 0.5rem;
      margin-top: 0.3rem;
      h4 {
        padding-left: 1rem;
      }
    }
  }
  .quality {
    display: flex;
    justify-content: center;
    text-align: center;
    margin-top: 1rem;
    .choice {
      width: 15%;
       .h_ead {
        height: 4.5rem;
        position: sticky;
        padding: 0.7rem;
        background-color: rgb(226, 125, 125);
      }
      .content {
        li {
          height: 4.5rem;
          background-color: grey;
          margin: 0.5rem;
        }
      }
      display: block;
      margin: 0.25rem;
    }
  }
  .content {
    li {
      list-style: none;
    }
  }
  .nextButton {
    justify-content: center;
    display: flex;
    self-align: center;
    height: 3rem;
    button {
      width: 35%;
      font-size: 1.5rem;
      cursor: pointer;
      &:hover {
        background-color: red;
        color: white;
      }
    }
  }
`;
