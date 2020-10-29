import Router from "./Router";
import { createGlobalStyle } from "styled-components";
import Reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${Reset};
  a {
    text-decoration: none;
    color: inherit;
  }
  * {
    box-sizing: border-box;
  }
  body {
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    color: white;
    background-color: rgb(20, 20, 20, 1);
    margin-top: 56px;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Router></Router>
    </>
  );
}

export default App;
