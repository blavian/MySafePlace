 import React from "react"
 import styled from "styled-components";
 import img from "../images/self-esteem.jpg"


const Container = styled.div`
display: flex;
flex-direction:column;
`

const MainImage = styled.img`
  padding: 10px;
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;

function LandingPage(){
    return (
      <Container>
        <MainImage
          src="https://cdn.pixabay.com/photo/2016/08/03/09/00/self-esteem-1566153_960_720.jpg"
          alt="No image found"
        ></MainImage>
      </Container>
    );
    }

export default LandingPage
