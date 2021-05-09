import styled from "styled-components";




export const Container = styled.div`
  background-color #20bf55;
  border-radius: 0.25rem;
`;

export const Image = styled.div`
  width: 100%;
  border-radius: 0.2rem;
`;
export const Wrapper = styled.div`
display:flex;
flex-direction:column;
`
export const CardContent = styled.div`
  padding: 1rem;;
`;

export const CardTitle = styled.a`
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: .2rem;
  text-transform: uppercase;
  text-align: center;
  text-decoration: none;
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

