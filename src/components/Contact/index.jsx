import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser"
import {lightblueColor, aquaColor, pinkColor, lightPinkColor} from "../UI/variables";
import linkedinicon from "../../assets/images/inicon.png";
import githubicon from "../../assets/images/githubicon.png";


const MainContainer = styled.section`
    color: ${lightblueColor};
    position: flex;
    @media only screen and (max-width: 1120px) and (min-width: 590px) {
        margin-top: 65rem;
    };
    @media only screen and (max-width: 589px) {
        margin-top: 80rem;
    };
`;
const MainTitle = styled.h2`
    text-align: center;
    font-size: 4.5rem;
    padding-top: 10rem;
    @media only screen and (max-width: 589px) {
        font-size: 3rem;
    };
`;
const ContainerContact = styled.div`
    display: flex;
    justify-content: space-evenly;
    height: 75vh;
    @media only screen and (max-width: 1120px) and (min-width: 590px) {
        display: unset;
    };
    @media only screen and (max-width: 589px) {
        display: unset;
    };
`;
const PersonalInfo = styled.div`
    text-align: center;
    margin: 1rem;
    width: 40%;
    @media only screen and (max-width: 1120px) and (min-width: 590px) {
        width: 100%;
    };
    @media only screen and (max-width: 589px) {
        width: 80%;
        margin-left: 10%;
    };
`;
const PersonalTextTitle = styled.h3`
    color: ${aquaColor};
    font-weight: 500;
    font-size: 2rem;
    margin: 4.5rem 0 2rem 0;
`;
const PersonalText = styled.p`
    margin: 1rem;
    font-weight: 500;
    font-size: 1.2rem;
`;
const AnchorIcon = styled.a`
    margin: 2rem;
    
`;
const ContactIcon = styled.img`
    margin: 0rem;
    &:hover {
        scale: 1.1;
        transition: 0.5s;
    }
`;
const FormInfo = styled.div`
    margin: 1rem;
    width: 40%;
    text-align: center;
    @media only screen and (max-width: 1120px) and (min-width: 590px) {
        width: 100%;
    };
    @media only screen and (max-width: 589px) {
        width: 80%;
        margin-left: 10%;
    };
`;
const FormContainer = styled.form`
    font-size: 2rem;
`;

const FormLayout = styled.div`
`;
const FirstField = styled.div`
    padding-top: 2.8rem;
    margin: 0.938rem;
    
`;
const SecondaryField = styled.div`
    margin: 0.938rem;
`;
const FirstLabel = styled.label`
    font-size: 1.25rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
`;
const FieldInput = styled.input`
    width: 50%;
    background-color: #fff;
    border: none;
    padding: 0.75rem 0.625rem;
    outline-color: ${pinkColor};
    font-size: 1rem;
    box-sizing: border-box;
    @media only screen and (max-width: 1120px) and (min-width: 590px) {
        width: 40%;
    };
    @media only screen and (max-width: 589px) {
        width: 90%;
    };
`;
const FielTextarea = styled.textarea`
    width: 50%;
    background-color: #fff;
    border: none;
    padding: 0.75rem 0.625rem;
    outline-color: ${pinkColor};
    font-size: 1rem;
    box-sizing: border-box;
    @media only screen and (max-width: 1120px) and (min-width: 590px) {
        width: 40%;
    };
    @media only screen and (max-width: 589px) {
        width: 90%;
    };
`;
const FormButton = styled.button`
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
        background-color: ${lightPinkColor};
        transition: 0.5s;
    }
`;


const ContactPage = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(
            'service_qwpjovx', 
            'template_kcwvwdg', 
            form.current, 
            '8aKSpIFKPLHdYweMm'
        )
        .then((result) => {
            console.log(result.text);
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
    };

    return(
        <MainContainer id="contactPage">
        <MainTitle>Contact me</MainTitle>
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
                <FormContainer ref={form} onSubmit={sendEmail}>
                    <FormLayout>
                        <FirstField>
                            <FirstLabel>Name</FirstLabel><br/>
                            <FieldInput 
                            type="text" 
                            placeholder="Name" 
                            name="user_name" 
                            required />
                        </FirstField>
                        <SecondaryField>
                            <FirstLabel>E-mail</FirstLabel><br/>
                            <FieldInput 
                            type="email" 
                            placeholder="E-mail" 
                            name="user_email"
                            required />
                        </SecondaryField>
                        <SecondaryField>
                            <FirstLabel>Message</FirstLabel><br/>
                            <FielTextarea 
                            rows="4" 
                            placeholder="Message" 
                            name="message" 
                            required />
                        </SecondaryField>
                        <FormButton type="submit" value="Send">Send</FormButton>
                    </FormLayout>
                </FormContainer>
            </FormInfo>
        </ContainerContact>
        </MainContainer>
    )
};

export default ContactPage;