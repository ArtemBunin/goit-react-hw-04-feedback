import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 40px;
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
  ul {
    list-style: none;
    padding: 0;
  }
  h1,
  h2,
  h3,
  p,
  ul,
  li {
    margin: 0;
  }
  button:active {
    transform: scale(0.95);
  }
`;