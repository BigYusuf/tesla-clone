import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Section from './Section';

function Home() {
    return (
        <Container>
        <Header backg='transparent' col='default' />
            <Section
                title='Model S'
                description='Order Online for '
                link='Touchless Delivery'
                backgimage='model-s.jpg'
                leftBtnText='Custom Order'
                rightBtnText='Existing Inventory'
                />
            <Section
                title='Model Y'
                description='Order Online for '
                link='Touchless Delivery'
                backgimage='model-y.jpg'
                leftBtnText='Custom Order'
                rightBtnText='Existing Inventory'
            />
            <Section
                title='Model 3'
                description='Order Online for '
                link='Touchless Delivery'
                backgimage='model-3.jpg'
                leftBtnText='Custom Order'
                rightBtnText='Existing Inventory'
            />
            <Section
                title='Model X'
                description='Order Online for '
                link='Touchless Delivery'
                backgimage='model-x.jpg'
                leftBtnText='Custom Order'
                rightBtnText='Existing Inventory'
                />
            <Section
                title='Lowest Cost Solar Panels inAmerica'
                link='Touchless Delivery'
                description='Money-back guarantee'
                backgimage='solar-panel.jpg'
                leftBtnText='Order Now'
                rightBtnText='Learn more'
            />
            <Section
                title='Solar for New Roofs'
                description='Solar Roof Cost Less Than a New Roof'
                backgimage='solar-roof.jpg'
                leftBtnText='Order Now'
                rightBtnText='Learn more'
            />
            <Section
                title='Accessories'
                description=''
                backgimage='accessories.jpg'
                leftBtnText='Shop Now' 
            />
        </Container>
    )
}

export default Home;

const Container = styled.div`
    height: 100vh;
`