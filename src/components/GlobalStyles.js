import { createGlobalStyle } from "styled-components";
import { colors } from "../utils/variables";

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 20px;
    color: ${colors.mainText};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    overflow-wrap: break-word;
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  ul, li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  button {
    cursor: pointer;
    font: inherit;
  }

  .Toastify__toast{
    font-family: inherit;
  }

  

  .Toastify__toast-container {
    top:  20px !important;
    left: unset !important;
    padding: 4px;
    
    @media screen and (max-width: 767.98px){
      width: 320px;
    }
  
    @media screen and (max-width: 374.98px){
      width: 94%;

      right: 10px;
    }

    @media screen and (max-width: 319.98px){
      max-width: 300.8px;
    }
  }
`;
