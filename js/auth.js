// Firebase Module Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA-tatCkhvibgOiB_sM48-VRVRHxLGJc6o",
    authDomain: "fir-tests-5bc8f.firebaseapp.com",
    projectId: "fir-tests-5bc8f",
    storageBucket: "fir-tests-5bc8f.appspot.com",
    messagingSenderId: "307931881954",
    appId: "1:307931881954:web:832a159c3fde47310fd9bb",
};

// Firebase Objects
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Helper function(s)
const getEl = (uid) => document.querySelector(uid);
const getElVal = (uid) => document.querySelector(uid).value;

// Form elements
const form = getEl("form");
const googleSignIn = getEl("#google-signin-btn");
const submitBtn = getEl("#submit-btn");


form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    // Form data
    const userName = getElVal("#user-name");
    const email = getElVal("#email");
    const pwd = getElVal("#pwd");
    const confirmPwd = getElVal("#confirm-pwd");

});
