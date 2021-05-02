import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Outer = styled.div`
  background-color: hsl(0, 0%, 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6em;
  letter-spacing: 6px;
  text-transform: uppercase;
  padding: 0 100px;
`;

export const StyledLink = styled(NavLink)`
  color: hsl(0, 0%, 0%);
  text-decoration: none;
  &:hover {
    background-color: hsl(280, 58%, 48%);
    color: hsl(0, 0%, 100%);
    border-style: solid;
    border-color: hsl(280, 58%, 48%);
  }
`;

  
 





