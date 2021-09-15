import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background: #1b1b1b;
    font-family: 'Inter', sans-serif;
}

button{
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    font-family: 'Inter', sans-serif;

    &:hover{
         background-color: #23d997;
         color: white;
    }

}
h2{
    font-weight: lighter;
    font-size: 4rem;
    color: white;
}
h3{
    color: white;
}

h4{
    font-weight: bold;
   
}

p{
    padding: 3rem 0rem;
    font-size: 1.4rem;
    color: #ccc;
    line-height: 1.5;
}

span{
    font-weight: bold;
    color: #23d997;
}

a{
    font-size: 1.1rem;
}
`