import React from "react";
//Import CSS
import "./ProfileScreen.css";
//import components
import Nav from "../../components/navbar/Nav";

//import images:
import profileImage from "../../assets/images/netflix-profile-picture.jpg";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { auth } from "../../firebase";

export default function ProfileScreen() {
  const user = useSelector(selectUser);

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen_body">
        <h1>Edit Profile</h1>
        <div className="profileScreen_info">
          <img src={profileImage} alt="" />
          <div className="profileScreen_details">
            <h2>{user.email}</h2>
            <div className="profileScreen_plans">
              <h3>Premium Plan</h3>

              <button
                className="profileScreen_signOut"
                onClick={() => auth.signOut()}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
