import React from "react";
import styled from "styled-components";
import { lightblueColor, aquaColor } from "../UI/variables";
import css3icon from "../../assets/images/html5.png";
import html5icon from "../../assets/images/css3.png";
import javascripticon from "../../assets/images/javascript.png";
import reacticon from "../../assets/images/react.png";

const ContainerAbout = styled.section`
    margin: 80px 120px 0 120px;
    padding: 100px 100px 0 100px;
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
const TextAbout = styled.div`
    color: ${lightblueColor};
    font-size: x-large;
`;
const TextAbout2 = styled.p`
    margin-top: 40px;
    text-align: center;
`;
const IconAbout = styled.div`
    text-align: center;
    margin-top: 40px;
`;
const ImgAbout = styled.img`
    margin: 10px;
`;

const AboutPage = () => {
    return(
        <ContainerAbout id="aboutPage">
            <HeadAbout><h2>Hi there<SpAbout>!</SpAbout></h2></HeadAbout>
            <TextAbout><p>I’m Erick Leonardo Gallardo Salmerón a graduate with a bachelor's degree in <SpAbout>
                    Software Development </SpAbout>focused in Front-End, I consider myself a
                    person capable of <SpAbout>easily a adapt</SpAbout> to any type of environment, always calm under any stress situation or
                    any kind of problem, <SpAbout>constantly expanding my knowledge</SpAbout> with new technologies and tools to create 
                    beautiful, responsive and functional web sites<SpAbout>.</SpAbout></p>
            </TextAbout>
            <TextAbout>
                <TextAbout2>these are the technologies that I use</TextAbout2>
            </TextAbout>
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