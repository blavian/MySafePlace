import React from "react"


 import styled from "styled-components";
 import img from "../images/self-esteem.jpg"

 const MainImage = styled.div`
   background-image: url(${img});
   background-size: cover;
   height: 60rem;
   box-sizing: border-box;
   margin: 0;
 `;

function LandingPage(){
    return (
        <MainImage></MainImage>
        )
    }

export default LandingPage
