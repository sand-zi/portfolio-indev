import { NavLink } from "react-router-dom"


import styled from "styled-components"

export const AppHeader = () => {

    return (
        <StyledNav className="app-header">
            <h1>
                <a className="logo" href="#"> Portfolio inDev</a>

            </h1>
            <ul>
                <li>
                    <NavLink exact to="/">1. About Me</NavLink>

                </li>
                <li>
                    <NavLink to="/projects">2. My Work</NavLink>

                </li>
                <li>
                    <NavLink to="/contact">3. Contact Me</NavLink>

                </li>
            </ul>
        </StyledNav>
    )

}


const StyledNav = styled.nav`
     min-height: 10vh;
     display: flex;
     justify-content: space-between;
     align-items: center;
     padding: 1rem 10rem;
     background: #282828;

     .logo{
         font-size: 1.5rem;
         font-family: "Lobster", cursive;
         font-weight: lighter;
     }



    ul{
        display: flex;
        li{
            position: relative;
        }
    }

    ul >*:not(:last-child){
        padding-right: 10rem;
    }

`