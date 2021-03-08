import styled from "styled-components"



export const CardClass = styled.div`
  display: flex;
  height: 280px;
  width: 200px;
  background-color: #17141d;
  border-radius: 10px;
  box-shadow: -1rem 0 3rem #000;
  transition: 0.4s ease-out;
  position: relative;
  left: 0px;
  &:hover {
    transform: translateY(-20px);
    transition: 0.4s ease-out;
  }
`;
export const CardTitle = styled.div`
  color: white;
  font-weight: 300;
  position: absolute;
  left: 20px;
  top: 15px;
`;