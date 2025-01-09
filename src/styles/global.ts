import { createGlobalStyle } from "styled-components";
import Reset from "./reset";
import Font from "./font";

const GlobalStyle = createGlobalStyle`
  ${Reset}
  ${Font}

  html,
  body {
    background: ${({ theme }) => theme.colors.grey03};
    color: ${({ theme }) => theme.colors.black};
    font-family: "Noto Sans KR", "Bebas Neue", sans-serif;
    font-size: 62.5%;
    transition: background 0.3s ease;

    -ms-overflow-style: none; 
    scrollbar-width: none; 

    &::-webkit-scrollbar {
      display: none;
      width: 0;  
      height: 0;
      background: transparent;  
      -webkit-appearance: none;
    }
  }

  * {
    box-sizing: border-box;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
      width: 0;  
      height: 0;
      background: transparent;  
      -webkit-appearance: none;
    }
  }

  input, textarea, button {
    border: none;
    outline: none;
    resize: none;
    background: transparent;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  @media (min-width: 425px) {
    body {
      width: 390px;
      margin: 0 auto;
    } 
  }
`;

export default GlobalStyle;
