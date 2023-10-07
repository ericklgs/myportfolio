import React from "react";
import styled from "styled-components";
import {shadowColor, lightblueColor} from "../UI/variables";

const StyledHeader = styled.nav`
    list-style: none;
    color: ${lightblueColor};
    font-size: small;
    box-shadow: 1px 1px 8px ${shadowColor};
`
const NavLinks = styled.ul`
    text-align: center;
`
const NavBtn = styled.li`
    display: inline-block;
    padding: 15px 30px;
`
const NavBtnStyle = styled.a`
    color: inherit;
    text-decoration: none;
    cursor: pointer;
`

const Header = () => {
    return(
        <StyledHeader>
            <NavLinks>
                <NavBtn><NavBtnStyle>Home</NavBtnStyle></NavBtn>
                <NavBtn><NavBtnStyle>About</NavBtnStyle></NavBtn>
                <NavBtn><NavBtnStyle>Projects</NavBtnStyle></NavBtn>
                <NavBtn><NavBtnStyle>Contact</NavBtnStyle></NavBtn>
            </NavLinks>
        </StyledHeader>
    )
}


export default Header