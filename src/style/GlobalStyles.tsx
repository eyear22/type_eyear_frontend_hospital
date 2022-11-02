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
    background:#F8F8F8;
    color: #000000;
    font-family: Inter;
    height: 100vh;
    text-rendering: optimizeLegibility;
  }
`;
