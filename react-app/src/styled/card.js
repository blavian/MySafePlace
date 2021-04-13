import styled from "styled-components"


export const Main = styled.div`
max-width:auto;
margin:0 auto;
`
export const Cards = styled.ul`
  margin: 0;
  padding: 0;
`
export const CardItems = styled.li`
  display: flex;
  padding: 1rem;
`;
export const Card = styled.div`
    background-color #20bf55;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
export const Image = styled.div`
  height: auto;
  max-width: 100%;
  vertical-align: middle;
`;

export const CardContent = styled.div`
  padding: 1rem;
    background-color #20bf55;
    background-image linear-gradient(315deg, #20bf55 0%, #01baef 74%);

`;

export const CardTitle = styled.h2`
  color: #ffffff;
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align:center;
  margin: 0px;
`;

