import React from "react";
import styled from "styled-components";
import { lightblueColor, aquaColor, pinkColor } from "../UI/variables";

const Container = styled.section`
    color: ${lightblueColor};
    text-align: left;
    padding: 100px;
    margin: 230px 0px 0px 0px;
    width: fit-content;
    height: 75vh;
    position: relative;
    top: 50%;
    left: 10%;
    font-size: xxx-large;
`;
const TextColor = styled.span`
    color: ${aquaColor};
`;
const ResumeBtn =  styled.a`
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
    color: ${lightblueColor};
    border-radius: 6px;
    background-color: ${pinkColor};
    padding: 8px 10px 8px 10px;
    box-shadow: 5px 5px 4px #000000;
`;

const Homepage = () =>{
    return(
        <Container>
            <h1>Hi! I'm<TextColor> Erick Salmeron</TextColor></h1>
            <h2>a Web Developer</h2>
            <ResumeBtn href="#">Download CV</ResumeBtn>
        </Container>
    )
}

export default Homepage;