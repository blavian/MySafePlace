import styled from "styled-components"

export const Main = styled.div`
max-width:1000px;
margin:0 auto;
`
export const Cards = styled.ul`
    display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
`
export const CardItems = styled.li`
  display: flex;
  padding: 1rem;
`;
export const Card = styled.div`
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
export const Image = styled.div`
  height: auto;
  max-width: 10%;
  vertical-align: middle;
`;

export const CardContent = styled.div`
  padding: 1rem;
  background: linear-gradient(to bottom left, #ef8d9c 40%, #ffc39e 100%);
`;

export const CardTitle = styled.h2`
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin: 0px;
`;