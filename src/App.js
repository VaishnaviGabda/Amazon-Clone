
import './App.css';
import './Header';
import Header from './Header';
import Home from './Home';
import Login from './Login'
import Checkout from './Checkout';
import Payment  from './Payment';
import Orders from './Orders';
import { BrowserRouter as Router ,Switch ,Route, BrowserRouter} 
from "react-router-dom"
import { useEffect, useState } from 'react';
import { auth } from './firebase';
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js";


const promise = loadStripe("pk_test_51KJIolSB2rJifC6BxtIJMesPlSMgf9iBJE8QanvyjoOetb6VUvSZ7FtFAMc9wuajXzr4zBaRwXN2n3QTqRmFMu7o007oaizGTQ")

function App() {

  const [{} , dispatch] = useStateValue();

  useEffect(()=>{

    auth.onAuthStateChanged(authUser => {
      console.log('USER IS',authUser);

      if (authUser){
        //logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      }else {
        //logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })

      }


    })


  },[])

  return (
    // BEM
    <BrowserRouter>
    <Router>
    <div className="app">
      
     <Switch>
       <Route path="/orders">
         <Header/>
         <Orders />
         </Route>
       <Route path="/login">
         <Login />
       </Route>
      <Route path="/checkout">
        <Route path='/welcome' element={<Home/>} />
         <Header/>
        <Checkout/>
      </Route >
      <Route path="/payment">
          <Header/>
          <Elements stripe={promise}>
          <Payment/>
          </Elements>
        </Route>
     <Route path="/">
        <Header/>
        <Home/>
      </Route >

     </Switch>
    

    </div>
    </Router>
    </BrowserRouter>
  );
}
export default App;
