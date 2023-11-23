import React from "react";
import styled from "styled-components";
import {lightblueColor, aquaColor} from "../UI/variables"
import linkedinicon from "../../assets/images/inicon.png";
import githubicon from "../../assets/images/githubicon.png";


const TitleContact = styled.section`
    color: ${lightblueColor};
    text-align: center;
    font-size: 3rem;
`
const ContainerContact = styled.div`
    display: flex;
    justify-content: space-evenly;
    height: 75vh;
`
const PersonalInfo = styled.div`
    text-align: center;
    margin: 1rem;
    width: 40%;
`
const PersonalTextTitle = styled.h3`
    color: ${aquaColor};
    font-weight: 500;
    font-size: 2rem;
    margin: 4.5rem 0 2rem 0;
`
const PersonalText = styled.p`
    color: ${lightblueColor};
    margin: 1rem;
    font-weight: 500;
    font-size: 1.2rem;
`
const AnchorIcon = styled.a`
    margin: 0.7rem;
`
const ContactIcon = styled.img`
    margin: 1rem;
`
const FormInfo = styled.div`
    margin: 1rem;
    width: 40%;
    text-align: center;
`
const FormLayout = styled.div`

`

const ContactPage = () => {
    return(
        <TitleContact id="contactPage"><h2>Contact me</h2>
        <ContainerContact>
            <PersonalInfo>
                <PersonalTextTitle>E-mail</PersonalTextTitle>
                <PersonalText>el.gs9595@gmail.com</PersonalText>
                <PersonalText>el.gs9595@outlook.com</PersonalText>
                <PersonalTextTitle>Socials</PersonalTextTitle>
                <AnchorIcon href="https://www.linkedin.com/in/erickleogs/" target="_blank" rel="noopener noreferrer"><ContactIcon src={linkedinicon}/></AnchorIcon>
                <AnchorIcon href="https://github.com/ericklgs" target="_blank" rel="noopener noreferrer"><ContactIcon src={githubicon}/></AnchorIcon>
            </PersonalInfo>
            <FormInfo>
                <PersonalTextTitle>E-mail</PersonalTextTitle>
                <PersonalText>el.gs9595@gmail.com</PersonalText>
                <PersonalText>el.gs9595@outlook.com</PersonalText>
                <PersonalTextTitle>Socials</PersonalTextTitle>
                <a href="https://www.linkedin.com/in/erickleogs/" target="_blank" rel="noopener noreferrer"><ContactIcon src={linkedinicon}/></a>
                <a href="https://github.com/ericklgs" target="_blank" rel="noopener noreferrer"><ContactIcon src={githubicon}/></a>
            </FormInfo>
        </ContainerContact>
        </TitleContact>
    )
}

export default ContactPage;