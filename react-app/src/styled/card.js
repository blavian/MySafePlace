import styled from "styled-components";


export const Image = styled.img`
  width: 100%;
  border-radius: 4rem;
  @media only screen and (min-width: 550px) {
    width: 25rem;
    margin-right: 1rem;
  }
  @media only screen and (min-width: 950px) {
    width: 25rem;
    margin-right: 1rem;
  }
`;


export const Container = styled.div`
margin:1rem;
padding:1rem;
border-radius: .4rem;
background: #383A45;
@media only screen and (min-width:550px){
max-width:500px;
}
`

export const Button = styled.button`
  width:50%;
  display: inline-block;
  padding:.5em;
  color: hsl(0,0%,100%);
  border-radius: .5em;
  background-image: linear-gradient(315deg, #20bf55 0%, #01baef 74%);
  cursor: pointer;
`


export const Title =  styled.h1`
color:red;
align-text:center;
line-height: 119.7%;
`








  

 
      
 

