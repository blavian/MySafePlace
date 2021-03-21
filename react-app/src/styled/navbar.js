import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Outer = styled.div`
  background-color: #ffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6em;
  letter-spacing: 6px;
  text-transform: uppercase;
  padding: 0 100px;
`;

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  &:hover {
    background-color: #9d6bed;
    color: #ffff;
  }
`;

  
 





