# Netflix Clone App

## Overview

This project is a Netflix clone application built using React.js, Firebase, and Redux. The app allows users to browse movies and shows, as well as manage their watchlists.

## Features

- User Authentication (Sign Up, Sign In)
- Movie Browsing
- Responsive Design

## Technologies Used

- **Frontend**: React.js, React Router, Redux
- **Backend**: Firebase (Firestore, Authentication, Storage)
- **Styling**: CSS, Styled Components
- **Deployment**: Firebase Hosting

## Setup Instructions

### Prerequisites

- Node.js and npm installed
- Firebase account

### Step 1: Clone the Repository

```bash
git clone https://github.com/OlsJacob-FS/netflix-clone.git
cd netflix-clone
```

npm install

Go to the Firebase Console.Create a new project.Enable Firestore and Authentication (Email/Password).Add your app's configuration to src/firebase.js.

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
apiKey: "YOUR_API_KEY",
authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
projectId: "YOUR_PROJECT_ID",
storageBucket: "YOUR_PROJECT_ID.appspot.com",
messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();

export { auth, firestore };

npm start

Feel free to modify any sections to better fit your project!
