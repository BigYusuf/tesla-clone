import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import AccountSection from './AccountSection';
import {useSelector} from 'react-redux';
import {Link, useHistory} from 'react-router-dom';
import {auth} from './firebase';
import {selectUser, logout} from '../features/user/userSlice';
import { useDispatch } from 'react-redux';
import { signOut } from 'firebase/auth';


const TeslaAccount = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const history = useHistory();

    const HandleLogout = () => {
        signOut(auth).then(() => {
            dispatch(logout())
            history.push('/')
        })
        .catch((error) => alert(error.message))
    }
    return (
        <Container>
            <Menu>
                <AccountHeader>
                    <Header backg='#393c41' col='white' />
                </AccountHeader>
                <Info>
                    <UserInfo>
                        <h4>{user?.displayName + "'s"} Tesla</h4>
                    </UserInfo>
                    <SmallMenu>
                        <Link to="#">Home</Link>
                        <Link to="#">Account</Link>
                        <Link to="#">history</Link>
                        <Link to="#" onClick={HandleLogout}>Sign Out</Link>
                    </SmallMenu>
                </Info>
            </Menu>

            <CarMenu>
                <AccountSection 
                imgSrc ='/images/Account-nocar.jpg'
                model = 'Model S'
                testDrive
                />
                <AccountSection 
                imgSrc ='/images/Account-nocar.jpg'
                model = 'Model X'
                />
            </CarMenu>
        </Container>
    )
}

export default TeslaAccount;

const Container = styled.div`
`
const AccountHeader = styled.div`
    margin-bottom: 60px;
`
const Menu = styled.div`
    display: flex;
    flex-direction: column;
`
const Info = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 60px 140px;
    padding-bottom: 30px;

    @media (max-width: 768px) {       
        padding: 40px 20px;
    }
`
const UserInfo = styled.div`

    h4{
        font-weight: 500;
        text-transform: capitalize;
        font-size: x-large;

        @media (max-width: 768px) {       
            font-size: large;
        }
    }
`
const SmallMenu = styled.div`
    display: flex;
    gap: 20px;

    a{
        text-decoration: none;
        color: #393c41;
        font-size: smaller;
        transition: all 0.2s;
        text-transform: capitalize;

        &:hover{
            color: black;
            font-weight: 500;
        }
    }
`
const CarMenu = styled.div`
    display: grid;
    place-items: center;
    gap: 30px;
    padding-bottom: 40px;
`