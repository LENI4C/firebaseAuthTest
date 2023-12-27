// Firebase Services
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signInWithPopup,
    GoogleAuthProvider
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


// Firebase Configurations
const firebaseConfig = {
    apiKey: "AIzaSyA_qKLSxF806YXLB3YwA8iNnUv8jZ6KUQI",
    authDomain: "tradedeck-4ec67.firebaseapp.com",
    databaseURL: "https://tradedeck-4ec67-default-rtdb.firebaseio.com",
    projectId: "tradedeck-4ec67",
    storageBucket: "tradedeck-4ec67.appspot.com",
    messagingSenderId: "913044807046",
    appId: "1:913044807046:web:362b7f774f1d816bc2e007",
};


// Initializing Firebase Services
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


// helper function to get elements by unique identifiers
const getEl = (uid) => {
    return document.querySelector(uid);
};


// required elements
export const form = getEl("#form");
export const userName = getEl("#user-name");
export const email = getEl("#email");
export const pwd = getEl("#pwd");
export const confirmPwd = getEl("#confirm-pwd");
export const signUpBtn = getEl("[type=submit]");
export const loginBtn = getEl("#login-btn");
export const loginGoogleBtn = getEl("#google-signin-btn");
export const wrongPwdText = getEl("#wrong-pwd-text");


// main functions
export const registerUser = (e) => {
    e.preventDefault();
    // mismatched password text : currently messy should be edited
    if (pwd.value != confirmPwd.value) {
        wrongPwdText.innerText = `mismatched password`;
    } else {
        createUserWithEmailAndPassword(auth, email.value, pwd.value)
            .then((userInfo) => {
                const user = userInfo.user;
                console.log(user);
                alert(`Your account has been Created`);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            });
    }
};

export const loginUser = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email.value, pwd.value)
        .then((userInfo) => {
            const user = userInfo.user;
            alert("successful login");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
};

// onAuthStateChanged(auth, (user) => {
//     if (user) {
//         //   location.href = "../index.html"
//         const uid = user.uid;
//         console.log(uid);
//         console.log(user);
//         // ...
//     } else {
//         // User is signed out
//         // ...
//     }
// });


export const loginWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
}
