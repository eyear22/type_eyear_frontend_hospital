import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
    }
    *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    display: flex;
    background:#333333;
    color: #FFFFFF;
    font-family: Inter;
    height: 100vh;
    text-rendering: optimizeLegibility;
  }
`;
