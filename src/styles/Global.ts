import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  
}

:root {

  --font-title-1: 2.6rem;
  --font-title-2: 2.2rem;
  --font-title-3: 1.8rem;
  --font-title-4: 1.4rem;
 
  --font-text-1:  1.6rem;
  --font-text-2:  1.4rem;
  --font-text-3:  1.2rem;


  --font-weight-1: bold;
  --font-weight-2: 500;
  --font-weight-3: 400;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;

  font-size: 62%;
}

@media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }

body {
  font-family: "Inter", sans-serif;

}


button{
   cursor: pointer;
   font-size : 1.4rem;
   border: none;
   background: transparent;
   transition: border-color 0.25s;
   border-radius: 4px;
   };

input{
   border-radius: 4px;
   border: 0 none;
};

input::placeholder{
        
    }

input:focus{
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
}

a{
 color: unset;
 text-decoration: none;
 }

ul, ol, li{
 list-style: none;
 }

h1, h2, h3, h4, h5, h6, p, a, span, li, button, input{
  font-family: 'Roboto', sans-serif;
 }



`

export default GlobalStyle
