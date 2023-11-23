import React from "react";
import styled from "styled-components";
import { lightblueColor, aquaColor } from "../UI/variables";
import css3icon from "../../assets/images/html5.png";
import html5icon from "../../assets/images/css3.png";
import javascripticon from "../../assets/images/javascript.png";
import reacticon from "../../assets/images/react.png";

const ContainerAbout = styled.section`
    margin: 0.313rem 7.5rem 12.5rem 7.5rem;
    padding: 15.5rem 6.25rem 6.25rem 6.25rem;
    height: 85vh;
`;
const HeadAbout = styled.div`
    color: ${lightblueColor};
    font-size: xx-large;
`;
const SpAbout = styled.span`
    color: ${aquaColor};
    align-content: flex-start;
`;
const MainParagraph = styled.div`
    color: ${lightblueColor};
    font-size: x-large;
`;
const SecondaryParagraph = styled.p`
    margin-top: 5.5rem;
    text-align: center;
`;
const IconAbout = styled.div`
    text-align: center;
    margin-top: 3.5rem;
`;
const ImgAbout = styled.img`
    margin: 0.625rem;
`;

const AboutPage = () => {
    return(
        <ContainerAbout id="aboutPage">
            <HeadAbout><h2>Hi there<SpAbout>!</SpAbout></h2></HeadAbout>
            <MainParagraph><p>I’m Erick Leonardo Gallardo Salmerón a graduate with a bachelor's degree in <SpAbout>
                    Software Development </SpAbout>focused in Front-End, I consider myself a
                    person capable of <SpAbout>easily a adapt</SpAbout> to any type of environment, always calm under any stress situation or
                    any kind of problem, <SpAbout>constantly expanding my knowledge</SpAbout> with new technologies and tools to create 
                    beautiful, responsive and functional web sites<SpAbout>.</SpAbout></p>
            </MainParagraph>
            <MainParagraph>
                <SecondaryParagraph>these are the technologies that I use</SecondaryParagraph>
            </MainParagraph>
            <IconAbout>
                <ImgAbout src={html5icon} alt="HTML5"/>
                <ImgAbout src={css3icon} alt="CSS5"/>
                <ImgAbout src={javascripticon} alt="JavaScript"/>
                <ImgAbout src={reacticon} alt="React"/>
            </IconAbout>
        </ContainerAbout>
    )
}


export default AboutPage;