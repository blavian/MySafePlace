import styled from "styled-components";

export const Main = styled.div`
  max-width: auto;
  margin: 0 auto;
`;
export const Cards = styled.ul`
  margin: 0;
  padding: 0;
`;
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
    background-color: #20bf55;
    background-image: linear-gradient(315deg, #20bf55 0%, #01baef 74%);
`;

export const CardTitle = styled.h2`
  color: hsl(0, 0%, 100%);
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: center;
  text-decoration:none;
  margin: 0px;
`;
export const CardButton = styled.a`
  color: hsl(240, 82%, 57%);
  padding: 0.8rem;
  font-size: 14px;
  text-transform: uppercase;
  border-radius: 4px;
  font-weight: 400;
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.2);

  &:hover {
    background-color: rgba(255, 255, 255, 0.12);
  }
`;
