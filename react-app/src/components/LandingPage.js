 import React from "react"
 import styled from "styled-components";





const MainImage = styled.img`
  padding: 10px;
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;

function LandingPage(){
    return (
     
        <MainImage
          src="https://cdn.pixabay.com/photo/2016/08/03/09/00/self-esteem-1566153_960_720.jpg"
          alt="No image found"
        ></MainImage>
           
      
    );
    }

export default LandingPage
