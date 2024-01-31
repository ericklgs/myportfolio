import React from "react";
import styled from "styled-components";
import { lightblueColor, aquaColor, pinkColor, lightPinkColor } from "../UI/variables";


const MainContainer = styled.section`
    padding: 0.938rem 0 0 9.375rem;
    @media only screen and (max-width: 1120px) and (min-width: 590px) {
        padding: 0.938rem 0 0 5rem;  
    };
    @media only screen and (max-width: 589px) {
        padding: 0.938rem 0 0 1rem;
    };
`;
const Container = styled.div`
    color: ${lightblueColor};
    text-align: left;
    padding: 0.938rem;
    margin: 6em 0rem 0rem 3.5rem;
    height: 75vh;
    font-size: xxx-large;
    @media only screen and (max-width: 589px) {
        margin: 6em 0 0 0;
        font-size: 2.5rem;
    };
`;
const TextColor = styled.span`
    color: ${aquaColor};
`;
const ResumeBtn =  styled.a`
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    text-decoration: none;
    color: ${lightblueColor};
    border-radius: 0.375rem;
    background-color: ${pinkColor};
    padding: 0.5rem 0.625rem 0.5rem 0.625rem;
    box-shadow: 0.313rem 0.313rem 0.25rem #000000;
    &:hover {
        background-color: ${lightPinkColor};
        transition: 0.5s;
    }
`;

const Homepage = () =>{
    return(
        <MainContainer id="homePage">
            <Container >
                <h1>Hi<TextColor>!</TextColor> I'm<TextColor> Erick Salmeron</TextColor></h1>
                <h2>a Web Developer</h2>
                <ResumeBtn href="https://drive.google.com/file/d/1KqGfDVxrUohUzuv84u4W6uCyL9BflFMM/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Download CV</ResumeBtn>
            </Container>
        </MainContainer>
    )
};

export default Homepage;