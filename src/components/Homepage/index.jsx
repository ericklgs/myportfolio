import React from "react";
import styled from "styled-components";
import { lightblueColor, aquaColor, pinkColor } from "../UI/variables";


const MainContainer = styled.section`
    padding: 0.938rem 0 0 9.375rem;
`;
const Container = styled.div`
    color: ${lightblueColor};
    text-align: left;
    padding: 0.938rem;
    margin: 6em 0rem 0rem 3.5rem;
    height: 75vh;
    font-size: xxx-large;
`;
const TextColor = styled.span`
    color: ${aquaColor};
`;
const ResumeBtn =  styled.a`
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;
    color: ${lightblueColor};
    border-radius: 6px;
    background-color: ${pinkColor};
    padding: 8px 10px 8px 10px;
    box-shadow: 5px 5px 4px #000000;
`;

const Homepage = () =>{
    return(
        <MainContainer id="homePage">
            <Container >
                <h1>Hi! I'm<TextColor> Erick Salmeron</TextColor></h1>
                <h2>a Web Developer</h2>
                <ResumeBtn href="#">Download CV</ResumeBtn>
            </Container>
        </MainContainer>
    )
}

export default Homepage;