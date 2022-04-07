import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal';

function Section( {title, description, link, leftBtnText, rightBtnText,backgimage }) {
    return (
        <Container bgImage={backgimage}>
            <Fade bottom>
            <ItemText>
                <h1>{title}</h1>
                <p>{description} <span>{link}</span></p>
            </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton> {leftBtnText} </LeftButton>
                        {rightBtnText && 
                        <RightButton> {rightBtnText} </RightButton>
                        }
                    </ButtonGroup>
                </Fade>
                <DownArrow src='./images/down-arrow.svg'/>
            </Buttons>
        </Container>
    )
}

export default Section

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/images/model-s.jpg');
    background-image: ${props => `url('/images/${props.bgImage}')`};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
    span{
        cursor: pointer;
        border-bottom: 1px solid #393c41;
    }
    span:hover{
        border-bottom: 2.5px solid black;
        color: black;
    }
`
const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction:column;
    }
`
const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    font-size: 12px;
    text-transform: uppercase;
    cursor: pointer;
    margin: 8px;
`
const RightButton = styled(LeftButton)`
    background-color: white;
    opacity: 0.85;
    color: black;
`
const Buttons = styled.div`
    display: flex;
    flex-direction: column;
`
const DownArrow = styled.img`
    height: 40px;
    animation: animateDown infinite 1.5s;
    cursor: pointer;
`