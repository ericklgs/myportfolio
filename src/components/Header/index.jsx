import React from "react";
import styled from "styled-components";
import {shadowColor, lightblueColor} from "../UI/variables";

const StyledHeader = styled.nav`
    list-style: none;
    color: ${lightblueColor};
    font-size: small;
    box-shadow: 1px 1px 8px ${shadowColor};
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 20;
`;
const NavLinks = styled.ul`
    text-align: center;
`;
const NavBtn = styled.li`
    display: inline-block;
    padding: 15px 30px;
`;
const NavBtnStyle = styled.a`
    color: inherit;
    text-decoration: none;
    cursor: pointer;
`;

const Header = () => {
    return(
        <StyledHeader>
            <NavLinks>
                <NavBtn><NavBtnStyle href="#">Home</NavBtnStyle></NavBtn>
                <NavBtn><NavBtnStyle href="#">About</NavBtnStyle></NavBtn>
                <NavBtn><NavBtnStyle href="#">Projects</NavBtnStyle></NavBtn>
                <NavBtn><NavBtnStyle href="#">Contact</NavBtnStyle></NavBtn>
            </NavLinks>
        </StyledHeader>
    )
}


export default Header;