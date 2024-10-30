import React, { useState } from "react";
//Import Css
import "./LoginScreen.css";
//Import Pages:
import SignUpScreen from "../sigIn/SignUpScreen";
//Import Images:
import netflixLogo from "../../assets/images/netflixLogo.png";
export default function LoginScreen() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginScreen_background">
        <img
          className="loginScreen-logo"
          src={netflixLogo}
          alt="Netflix Login"
        />
        <button className="loginScreen_button" onClick={() => setSignIn(true)}>
          Sign In
        </button>

        <div className="loginScreen_gradient"></div>
      </div>
      <div className="loginScreen_body">
        {signIn ? (
          <SignUpScreen />
        ) : (
          <>
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>
              Ready to Watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="loginScreen_input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  className="loginScreen_getStarted"
                  onClick={() => setSignIn(true)}
                >
                  Get Started
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
