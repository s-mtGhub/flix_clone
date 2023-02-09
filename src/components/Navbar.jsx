import React, { useState } from 'react'
import styled from 'styled-components'
// import logo from "../assets/logo.png"
import logoV from "../assets/logo2.mp4"
import {  NavLink, useNavigate } from 'react-router-dom'
import {FaSearch,FaPowerOff, FaMoneyCheckAlt} from "react-icons/fa"
import {  signOut} from 'firebase/auth'
import {
  getAuth
} from "firebase/auth";
import app from '../utils/firbase-config'



export default function Navbar({isScrolled}) {
  
  const navigate=useNavigate();
  const links = [
    { name: "Home", link: "/" },
    { name: "TV Show", link: "/tv" },
    { name: "Movies", link: "/movies" },
    { name: "My List", link: "/mylist" },
  ];
  const [showSearch, setShowSearch] = useState(false);
  const [inputHover, setinputHover] = useState(false);
  const Logout= ()=>{
    signOut(getAuth(app));
    navigate("/login");
    window.location.reload();
  }

  return (
    <>
      <Container>
        <nav className={`flex ${isScrolled ? "scrolled" : ""}`}>
          <div className="left flex a-center">
            <div className="brand flex a-center j-center">
              {/* <img src={logo} alt="logo" /> */}
              <video src={logoV} autoPlay loop />
            </div>
            <ul className="links flex">
              {links.map(({ name, link }) => {
                return (
                  <li key={name}>
                    <NavLink
                      to={link}
                      style={({ isActive }) => ({
                        // backgroundColor: isActive?'blue':'none'
                        display: isActive ? "none" : "inline",
                      })}
                    >
                      {name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="right flex a-center">
            <div className={`search ${showSearch ? "show-search" : ""}`}>
              <button
                onFocus={() => setShowSearch(true)}
                onBlur={() => {
                  if (!inputHover) setShowSearch(false);
                }}
              >
                {" "}
                <FaSearch />
              </button>
              <input
                type="text"
                placeholder="Search"
                onMouseEnter={() => setinputHover(true)}
                onMouseLeave={() => setinputHover(false)}
                onBlur={() => {
                  setShowSearch(false);
                  setinputHover(false);
                }}
              />
            </div>
            <div className="pro" title='Upgrade to Pro' onClick={()=>navigate("/subscription")}>
              <FaMoneyCheckAlt />
            </div>
            <button onClick={Logout} title="logout">
              <FaPowerOff />
            </button>
          </div>
        </nav>
      </Container>
    </>
  );
}


const Container = styled.div`
  .scrolled {
    background-color: Black;
  }
  nav {
    position: sticky;
    top: 0;
    height: 6.5rem;
    width: 100%;
    justify-content: space-between;
    position: fixed;
    z-index: 2;
    padding: 0 4rem;
    align-items: center;
    transition: 0.3s ease-in-out;
    .left {
      gap: 2rem;
      .brand {
        img {
          height: 4rem;
        }
        video {
          height: 4rem;
          border-radius: 20rem;
        }
        &:hover {
          cursor: pointer;
        }
      }
      .links {
        list-style-type: none;
        gap: 2rem;
        li {
          a {
            color: white;
            text-decoration: none;
            padding: 0.3rem;
            border-radius: 3.5px;
          }
        }
      }
    }

    .right {
      gap: 1rem;
      .pro {
        cursor: pointer;
        svg {
          color: yellow;
          font-size: 1.8rem;
        }
      }
      button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        &:focus {
          outline: none;
        }
        svg {
          color: #f34242;
          font-size: 1.2rem;
        }
      }
      .search {
        display: flex;
        gap: 0.4rem;
        align-items: center;
        justify-content: center;
        padding: 0.2rem;
        padding-left: 0.5rem;
        button {
          background-color: transparent;
          svg {
            color: white;
          }
        }
        input {
          width: 0;
          opacity: 0;
          visibility: hidden;
          background-color: transparent;
          transition: 0.3s ease-in-out;
          border: none;
          color: white;
          &:focus {
            outline: none;
          }
        }
      }
      .show-search {
        border: 1px solid white;
        background-color: rgb(0, 0, 0, 0.6);
        input {
          width: 100%;
          opacity: 1;
          visibility: visible;
          padding: 0.3rem;
        }
      }
    }
    .errMessage {
      text-align: center;
      color: white;
      padding: 2rem;
    }
  }
`;