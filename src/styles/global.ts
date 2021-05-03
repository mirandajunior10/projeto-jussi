import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

body {
  margin: 0 auto;
  max-width: 1440px;
  -webkit-font-smoothing: antialiased;
  font-family: 'Barlow', serif;
  font-weight: 500;
}

body, input, button{
  font-size: 16px;
}

input{
  outline: none;
}

button{
  cursor: pointer;
}

a{
  text-decoration: none;
  color:#000;
}
`;
