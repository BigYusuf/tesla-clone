import React, { useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import {BrowserRouter, Redirect, Switch, Route} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import TeslaAccount from './components/TeslaAccount';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/user/userSlice';
import {auth} from './components/firebase';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    //auth.onAuthStateChanged((userAuth) => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth){
        // User is signed in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
        })
        )
      }else{
        //User is signed out
        dispatch(logout())
      }
    })
  }, [dispatch])

  return (
    <BrowserRouter>
      <Switch>
         <Route path='/'exact><Home/> </Route>
         <Route path='/login' exact> 
          {user ? <Redirect to ='/teslaaccount'/> : <Login/>}
         
         </Route>
         <Route path='/register' exact><Register/> </Route>
         <Route path='/teslaaccount' exact> 
         {!user ? ( <Redirect to ='/login'/>) : ( <TeslaAccount/>)}
         </Route>

      </Switch>
    </BrowserRouter>

  );
}

export default App;
