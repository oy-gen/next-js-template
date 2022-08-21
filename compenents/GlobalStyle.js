import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,200;1,400&display=swap');

html {

/* ------------------------------------------------------------- Variables - Colors */

  --background-color: #EFEFEF;
  --background-darkcolor: #BDBDBD;
  --text-maincolor: #1C1B1B;
  --text-middlecolor:#616161;
  --text-lightcolor: #757575;
  --signal-color: #F94C43;
  --accent-color: #00796b;

  /* ------------------------------------------------------------- Variables - Sizes */

  --nav-height: 75px;
  --nav-height-mobile:65px;

  /* ------------------------------------------------------------- Variables - Effects */

  --box-shadow: 0px 0px 2rem 1rem rgba(0, 0, 0, 0.3);
  --black-translucent: rgb(0, 0, 0, 0.9);
  --gray-translucent: rgb(0, 0, 0, 0.2);
  --white-translucent: rgb(255, 255, 255, 0.6);
  --white-translucent-09: rgb(255, 255, 255, 0.9);
  --background-blur: blur(7px);
  
}

body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`;

export const theme = {
    colors: {
      primary: '#0070f3',
    },
  };
  