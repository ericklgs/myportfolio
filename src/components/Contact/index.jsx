import React from "react";
import styled from "styled-components";
import {lightblueColor} from "../UI/variables"
import linkedinicon from "../../assets/images/inicon.png";
import githubicon from "../../assets/images/githubicon.png";


const ContainerContact = styled.section`

`
const FornInfo = styled.div`
    
`
const PersonalInfo = styled.div`
    text-align: center;

`
const PersonalText = styled.p`
    color: ${lightblueColor};
    margin: 1rem;
    
`
const ContactIcon = styled.img`
    margin: 1rem;
`

const ContactPage = () => {
    return(
        <ContainerContact>
            <PersonalInfo>
                <PersonalText>Contact me</PersonalText>
                <PersonalText>el.gs9595@gmail.com</PersonalText>
                <PersonalText>Socials</PersonalText>
                <a href="#"><ContactIcon src={linkedinicon}/></a>
                <a href="#"><ContactIcon src={githubicon}/></a>
            </PersonalInfo>
        </ContainerContact>
    )
}

export default ContactPage;