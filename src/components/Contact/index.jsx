import React from "react";
import styled from "styled-components";
import {lightblueColor, aquaColor, pinkColor, blueColor} from "../UI/variables";
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
const FormLayout = styled.form`
    font-size: 2rem;
`

const ButtonContainer = styled.div`
    
`
const FormButton = styled.a`
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    text-decoration: none;
    color: ${lightblueColor};
    border-radius: 0.375rem;
    background-color: ${pinkColor};
    padding: 0.5rem 1rem 0.5rem 1rem;
    box-shadow: 0.313rem 0.313rem 0.25rem #000000;
    &:hover {
        background-color: ${blueColor};
        transition: 0.5s;
    }
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
                <FormLayout>
                    <ButtonContainer>
                        <FormButton>Send</FormButton>
                    </ButtonContainer>
                </FormLayout>
            </FormInfo>
        </ContainerContact>
        </TitleContact>
    )
}

export default ContactPage;