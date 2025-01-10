import { createGlobalStyle } from 'styled-components';
import Reset from './reset';
import 'styles/fonts.css';

const GlobalStyle = createGlobalStyle`
  ${Reset}

  * {
    box-sizing: border-box;
  }

  html,
  body {
    width: 100%;
    min-height: 100dvh;
    background: ${({ theme }) => theme.colors.grey03};
    color: ${({ theme }) => theme.colors.black};
    font-family: "Bebas Neue", "Noto Sans KR", sans-serif;
    font-size: 62.5%;
    
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

  ::-webkit-scrollbar {
  display: none;
}

`;

export default GlobalStyle;
