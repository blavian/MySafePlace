import React from "react"
import styled from "styled-components"

const Box = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background-color:#ffff;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;
function Footer(){
    return (
    <Box>
    <h1> developed by Beny Lavian</h1>
    </Box>
        )
    }

export default Footer
