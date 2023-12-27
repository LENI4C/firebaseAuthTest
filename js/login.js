import * as authData from "./auth.js";

authData.loginBtn.addEventListener("click", authData.loginUser);
authData.loginGoogleBtn.addEventListener("click", authData.loginWithGoogle)