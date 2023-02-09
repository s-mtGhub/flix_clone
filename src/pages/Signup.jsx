
import BackgroundImage from "../components/BackgroundImage"
import Header from "../components/Header"
import styled from "styled-components";
import { useState } from "react";
import app from "../utils/firbase-config"
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import {  useNavigate } from "react-router-dom";

export default function Signup() {
  const [showPassword,setShowPass]=useState(false);
  const [formVal,setFormVal]=useState({email:"",password:""});
  const navigate=useNavigate();
  const authentication = getAuth(app);
  const signinhandler=async()=>{
      try{
        const {email,password}=formVal;
         await createUserWithEmailAndPassword(authentication,email,password).then((res)=>{
          console.log(res);
         });

      }catch(err){
        console.log(err);    
      }
  
  
  }

   onAuthStateChanged(authentication,(currentUser)=>{
    if(currentUser) navigate("/");
   })


  return (
    <>
      <Container showPassword={showPassword}>
        <BackgroundImage />

        <div className="content">
          <Header 
          login
            btn={true}
          />
          <div className="body flex column a-center j-center">
            <div className="text flex column">
              <h1>Unlimited movies, TV shows and more</h1>
              <h4>watch anywhere, cancel anytime</h4>
              <h6>
                Ready to watch? Enter your email to create or restrt membership
              </h6>
            </div>
            <div className="form">
              <input
                type="email"
                placeholder="Email Address "
                name="email"
                value={formVal.email}
                onChange={(e) =>
                  setFormVal({ ...formVal, [e.target.name]: e.target.value })
                }
              />
              {showPassword && (
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formVal.password}
                  onChange={(e) =>
                    setFormVal({ ...formVal, [e.target.name]: e.target.value })
                  }
                />
              )}

              {!showPassword && (
                <button onClick={() => setShowPass(true)}>Get Started</button>
              )}
            </div>
            <button onClick={signinhandler}>Sign Up</button>
          </div>
          {/* </BackgroundImage> */}
        </div>
      </Container>
    </>
  );
}
   
const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: 15vh 85vh;
    .body {
      gap: 1rem;
      .text {
        ${'' /* gap: 1rem; */}
        text-align: center;
        font-size: 1.5rem;
        h1 {
          padding: 0 5rem;
        }
      }
      .form {
        display: grid;
        grid-template-columns: ${({showPassword})=>showPassword? "1fr 1fr": "2fr 1fr"};
        width: 50%;
        input {
          color: black;
          border: none;
          padding: 1.2rem;
          font-size: 1rem;
          border: 1px solid black;
          &:focus {
            outline: none;
          }
        }
        button {
          padding: 0.5rem 1rem;
          background-color: #e50914;
          border: none;
          cursor: pointer;
          color: white;
          ${'' /* border-radius: 0.2rem; */}
          font-weight: bolder;
          font-size: 1.05rem;
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
    }
  }
`;