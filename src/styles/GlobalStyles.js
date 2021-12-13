import styled, { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  :root {
    --primary: #C3073F;
    --primary-dark: #1A1A1D;
    --success: #0197f6;
    --info: #0197f6;
    --error: #f2af29;
    --warning: #f2af29;
  }

  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background-color: var(--primary-dark);
  }

  html, body, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
    background-color: var(--primary);
    border: none;
    color: #fff;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;
  }

  a {
    text-decoration: none;
    color: var(--primary);
  }

  ul {
    list-style: none;
  }
`;

export const Container = styled.section`
  max-width: 360px;
  background-color: #fff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
