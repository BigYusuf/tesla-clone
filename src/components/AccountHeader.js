import React, {useState} from 'react';
import styled from 'styled-components'; 
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {selectCars} from '../features/car/carSlice';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

const AccountHeader = () => {
    const [burgerStatus, setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars)

    return (
        <Container>
           <i>
               <img src='/images/logo.svg'alt=''/>
           </i>
           <Menu>
               {cars && cars.map((car, index)=>(
                   <Link to="#" key ={index}>{car}</Link>
               ))}
           </Menu>
           <RightMenu>
                <Link to="#">Shop</Link>
                <Link to="/teslaaccount">Tesla Account</Link>
                <CustomMenu onClick={() => setBurgerStatus(true)}/>
           </RightMenu>
           <BurgerNav show={burgerStatus}>
               <CloseWrapper>
                     <CustomClose onClick={() => setBurgerStatus(false)}/>
               </CloseWrapper>
              
                <li><Link to="#">Existing Inventory</Link></li>
                <li><Link to="#">Used Inventory</Link></li>
                <li><Link to="#">Trade in</Link></li>
                <li><Link to="#">Cybertrunk</Link></li>
                <li><Link to="#">Roadaster</Link></li>
                <li><Link to="#">Semi </Link></li>
                <li><Link to="#">Charging</Link></li>
                <li><Link to="#">Existing Inventory</Link></li>
                <li><Link to="#">Utilities</Link></li>
                <li><Link to="#">Test Drive</Link></li>
           </BurgerNav>

        </Container>
    )
}

export default AccountHeader;

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background-color: black;
`
const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    a{
        font-weight:600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
        color: white;
    }
    @media(max-width: 768px){
        display: none;
    }
`
const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a{
        font-weight:600;
        text-transform: uppercase;
        margin-right: 10px;        
        color: white;
    }
`
const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
    fill: #fff !important;
`
const BurgerNav = styled.div`
    position: fixed;
    list-style: none;
    top: 0;
    bottom: 0;
    right: 0;
    padding: 20px;
    text-transform: uppercase;
    background-color: white;
    width: 300px;
    z-index: 16;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props=> props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s;

    li{
        border-bottom: 1px solid rgba(0,0,0, 0.2);
        padding: 15px 0;

        a{
            font-weight: 600;
        }
    }
`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;   
    color: #fff;
`
const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`
