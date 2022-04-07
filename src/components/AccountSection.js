import React from 'react';
import styled from 'styled-components';

const AccountSection = ({imgSrc, model, testDrive}) => {
    return (
        <Car>
            <CarImage> <img src={imgSrc} alt={model} /></CarImage>
            <h2>{model}</h2>
            <ButtonGroup>
                <LeftButton>Order</LeftButton>
                {testDrive && <RightButton>testDrive</RightButton> }
            </ButtonGroup>
            <CarInfo>
                <span>Request a Call</span> to speak with a product specialist, 
                value your trade-in or apply for leasing
            </CarInfo>
        </Car>
    )
}

export default AccountSection;

const Car = styled.div`
    display: grid;
    place-items: center;
    border-top: 1px solid #d0d1d2;

    h2{
        font-weight: 500;
        font-size: xx-large;
        margin-top: -180px;
        text-transform: capitalize;
        
        @media (max-width: 768px) {
            margin-top: -110px;
            font-size: x-large;
        }
    }
`
const CarImage = styled.div`

    img{
        object-fit: contain;
        width: 100%
    }
`
const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: -40px;
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 0px;
    }
`

const LeftButton = styled.button`
    background-color: #3e6ae1;
    color: #fff;
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
    background-color: transparent;
    color: #171a20;
    border: 3px solid #171a20;
`
const CarInfo = styled.p`
    max-width: 350px;
    teaxt-align: center;
    font-size: smaller;
    line-height: 1.5;
    font-weight: 500;
    color: #393c41;

    span{
        color: #3e6ae1;
        cursor: pointer;
    }
`