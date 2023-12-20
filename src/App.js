import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase"; // Import the auth variable from your Firebase configuration

import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./LogIn";
import Payment from "./Payment";
import {loadStripe} from '@stripe/stripe-js'
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";
// import Orders from "./Orders";


const promise = loadStripe(
  "pk_test_51NzsvNJJG7pIDRzu1WDgBcbFV9FxSlvp2KGNmT1lkbEBInhA28fonpdUv8qfMt8AHxtPqqWC6ufJ0Ig4b9aA7zSA00mJFIFE55"
);

function App() {
  const [, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      // Unsubscribe from the auth state listener when the component unmounts
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/payment"
            element={
              <>
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
          <Route path="/Orders" element={<Orders />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;