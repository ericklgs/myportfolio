import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser"
import "./index.css"
import {lightblueColor, aquaColor, pinkColor, lightPinkColor} from "../UI/variables";
import linkedinicon from "../../assets/images/inicon.png";
import githubicon from "../../assets/images/githubicon.png";


const TitleContact = styled.section`
    color: ${lightblueColor};
    text-align: center;
    font-size: 3rem;
    padding-top: 10rem;
    position: relative;
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
    margin: 2rem;
    
`
const ContactIcon = styled.img`
    margin: 0rem;
    &:hover {
        scale: 1.1;
        transition: 0.5s;
    }
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
`


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
                <FormLayout ref={form} onSubmit={sendEmail}>
                    <ButtonContainer>
                        <div className="campo2">
                            <label>Name</label><br/>
                            <input 
                            type="text" 
                            placeholder="Name" 
                            name="user_name" 
                            required />
                        </div>
                        <div className="campo">
                            <label>E-mail</label><br/>
                            <input 
                            type="email" 
                            placeholder="E-mail" 
                            name="user_email"
                            required />
                        </div>
                        <div className="campo">
                            <label>Message</label><br/>
                            <textarea 
                            rows="4" 
                            placeholder="Message" 
                            name="message" 
                            required />
                        </div>
                        <FormButton type="submit" value="Send">Send</FormButton>
                    </ButtonContainer>
                </FormLayout>
            </FormInfo>
        </ContainerContact>
        </TitleContact>
    )
}

export default ContactPage;