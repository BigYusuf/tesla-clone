import { LanguageOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import {auth} from './firebase';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { login } from '../features/user/userSlice';
import { signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();


    const handleLogin = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password).then((userAuth) => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                
            }))
            history.push('/teslaaccount')
        }).catch((error) => alert(error.message));
    }

    return (
        <Container>
            <LoginHeader>
                <Logo>
                    <Link to='/'>
                          <img src='/images/logo.svg'alt=''/>
                    </Link> 
                </Logo>
                <Language>
                    <LanguageOutlined/><span>en-US</span>
                </Language>
            </LoginHeader>
            <LoginInfo> 
                <h1>Sign In</h1>
                <Form>
                    <form action="">
                        <Email>
                            <label htmlFor="email">Email Address</label>
                            <input type ="email"  id ="email" onChange={(e) => setEmail(e.target.value)}/>
                        </Email>
                        <Password>
                            <label htmlFor="password">Password</label>
                            <input type ="password" id ="password" onChange={(e) => setPassword(e.target.value)}/>
                        </Password>
                        <Button type='submit'onClick = {handleLogin}>Sign in</Button>
                    </form>
                    <Divider>
                        <hr /> <span>OR</span> <hr />
                    </Divider>
                    <Link to = '/register'>
                        <Button1  type='submit'>Create Account</Button1>
                    </Link>

                </Form>
            </LoginInfo>
        </Container>
    )
}

export default Login;


const Container = styled.div`
    height: 100vh;
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 70px;
`
const LoginHeader = styled.div`
    min-height: 60px;
    position: sticky;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    align-items: center;
    top: 0;
    
`
const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Language = styled.div`
    cursor: pointer;
    border-radius: 10px;
    padding: 5px;
    :hover{
        background-color: #ddd;
    }
`
const LoginInfo = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-width: 330px;
    gap: 20px;

    h1{
        font-weight: 500;
        font-size: 40px;

    }
`
const Form = styled.div`
    width: 360px;
`
const Email = styled.div`
    display: flex;
    flex-direction: column;

    label{
        color: #5c5e62;
        font-weight: 500;
        font-size: 15px;
        padding-left: 20px;
        display: flex;
        justify-content: flex-start;
    }
    input{
        margin-bottom: 30px;
        background-color: #f4f4f4;
        color: #5c5e62;
        border: 1px solid #f4f4f4;
        outline: none;
        border-radius: 50px;
        padding: 12px 20px;
        font-weight: 600;

        :focus{
            border: 1px solid #d6d6d6;
            transition: all 0.2s;
        }
    }
    
`
const Password = styled(Email)`
`
const Button = styled.div`
    background-color: #3e6ae1;
    color: #fff;
    border: none;
    border-radius: 50px;
    padding: 12px 40px;
    font-weight: 600;
    cursor: pointer;
    text-transform: uppercase;
    margin-bottom: 30px;
    outline: none;
    transition: all 0.4s;
    text-align: center;
    
    :hover{
        background-color: #3457b1;
    }
`
const Button1 = styled(Button)`
    background-color: transparent;
    color: #171a20;
    border: 3px solid #171a20;

    :hover{
        background-color: #171a20;
        color: #fff;
    }
`
const Divider = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    hr{
        width: 40%;
        height: 0;
        opacity: .3;
    }
    span{
        font-weight: 500;
        color: #5c5e62;
    }
`