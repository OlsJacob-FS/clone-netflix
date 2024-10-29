import React, { useEffect } from "react";
import "./App.css";
//Import Pages::
import HomeScreen from "./pages/homescreen/HomeScreen";
import LoginScreen from "./pages/login/LoginScreen";
import ProfileScreen from "./pages/profile/ProfileScreen";
//RRD
import { BrowserRouter, Route, Routes } from "react-router-dom";
//Import features
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    //Check if user is logged in
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //logged in
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        //logged out
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);
  return (
    <div className="app">
      <BrowserRouter>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route path="/" exact element={<HomeScreen />} />
            <Route path="/profile" exact element={<ProfileScreen />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
