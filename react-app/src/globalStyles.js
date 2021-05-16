import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    margin:0;
   padding:0;
   min-height: 100vh;
   background: #EEF0F1;
   font-family: Monaco;
   position: relative;
  padding-bottom: 65px;
  }
  a{
    text-decoration:none;
  }
`;

export default GlobalStyle;