import React from "react";
import styled from "styled-components";
import { lightblueColor, pinkColor, lightPinkColor, lightGreyColor } from "../UI/variables";
import toDoListImg from "../../assets/images/Projects/ToDoList.webp";
import OrgImg from "../../assets/images/Projects/Org.webp";
import PortfolioImg from "../../assets/images/Projects/Portfolio.webp";

const ProjectsMainSection = styled.section`
    margin-bottom: 15%;
    padding-top: 4rem;
    position: relative;
    height: 90vh;
`
const MainContainer = styled.div`
    display: grid;
    column-gap: 1rem;
    grid-template-columns: auto auto;
    margin: 0 5.5rem 0 5.5rem;
    @media (max-width: 1120px) {
        grid-template-columns: auto;
    }
`
const Column = styled.div`
    justify-self: center;
    padding-bottom: 2rem;
    background-color: ${lightGreyColor};
    border-radius: 0 0 12px 12px;
    margin-top: 3rem;
    &:hover{    
        scale: 1.03;
        transition: 0.5s;
        box-shadow: 0.313rem 0.513rem 0.65rem #000000;
    }
`
const MainGrid = styled.article`
    background-color: ${lightGreyColor};
`
const GridMainContainer = styled.div`
    background-color: ${lightGreyColor};
`
const FirstGridContent = styled.figure`
    text-align: center;
    background-color: ${lightGreyColor};
`
const Image = styled.img`
    width: 400px;
`
const SecondGridContent = styled.div`
    text-align: center;
    padding-bottom: 2rem;
    background-color: ${lightGreyColor};
`
const GridTitles = styled.div`
    background-color: ${lightGreyColor};
    color: ${lightblueColor};
`
const GridMaintitle = styled.h4`
    margin: 1.5rem 0 1rem 0;
    background-color: ${lightGreyColor};
`
const GridSecondaryTitle = styled.p`
    margin-bottom: 2rem;
    background-color: ${lightGreyColor};
`
const GridButtons = styled.div`
    background-color: ${lightGreyColor};
`
const Buttons = styled.a`
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    text-decoration: none;
    box-shadow: 0.313rem 0.313rem 0.25rem #000000;
    color: ${lightblueColor};
    border-radius: 0.375rem;
    background-color: ${pinkColor};
    padding: 0.5rem 1rem 0.5rem 1rem;
    &:hover {
        background-color: ${lightPinkColor};
        transition: 0.5s;
    }
`
const ButtonOne = styled(Buttons)`
    margin-right: 2rem;
    
`
const ButtonTwo = styled(Buttons)`
    margin-left: 2rem;
`
const ProjectsPage = () => {
    return(
        <ProjectsMainSection id="ProjectsPage">
            <MainContainer>
                <Column>
                    <MainGrid>
                        <GridMainContainer>
                            <FirstGridContent>
                                <Image src={toDoListImg} />
                            </FirstGridContent>
                            <SecondGridContent>
                                <GridTitles>
                                    <GridMaintitle>To Do List</GridMaintitle>
                                    <GridSecondaryTitle>List which can add, check, uncheck and delete tasks</GridSecondaryTitle>
                                </GridTitles>
                                <GridButtons>
                                    <ButtonOne href="https://to-do-list-ericklgs.vercel.app" target="_blank" rel="noopener noreferrer">Visit</ButtonOne>
                                    <ButtonTwo href="https://github.com/ericklgs/ToDoList" target="_blank" rel="noopener noreferrer">Code</ButtonTwo>
                                </GridButtons>
                            </SecondGridContent>
                        </GridMainContainer>
                    </MainGrid>
                </Column>
                <Column>
                    <MainGrid>
                        <GridMainContainer>
                            <FirstGridContent>
                                <Image src={OrgImg} />
                            </FirstGridContent>
                            <SecondGridContent>
                                <GridTitles>
                                    <GridMaintitle>Organization template</GridMaintitle>
                                    <GridSecondaryTitle>Template with different jobs positions </GridSecondaryTitle>
                                </GridTitles>
                                <GridButtons>
                                    <ButtonOne href="https://org-ericklgs.vercel.app" target="_blank" rel="noopener noreferrer">Visit</ButtonOne>
                                    <ButtonTwo href="https://github.com/ericklgs/org" target="_blank" rel="noopener noreferrer">Code</ButtonTwo>
                                </GridButtons>
                            </SecondGridContent>
                        </GridMainContainer>
                    </MainGrid>
                </Column>
                <Column>
                    <MainGrid>
                        <GridMainContainer>
                            <FirstGridContent>
                                <Image src={PortfolioImg} />
                            </FirstGridContent>
                            <SecondGridContent>
                                <GridTitles>
                                    <GridMaintitle>Organization template</GridMaintitle>
                                    <GridSecondaryTitle>Template with different jobs positions </GridSecondaryTitle>
                                </GridTitles>
                                <GridButtons>
                                    <ButtonOne href="https://org-ericklgs.vercel.app" target="_blank" rel="noopener noreferrer">Visit</ButtonOne>
                                    <ButtonTwo href="https://github.com/ericklgs/myportfolio" target="_blank" rel="noopener noreferrer">Code</ButtonTwo>
                                </GridButtons>
                            </SecondGridContent>
                        </GridMainContainer>
                    </MainGrid>
                </Column>
            </MainContainer>
        </ProjectsMainSection>
    )
}        

export default ProjectsPage;