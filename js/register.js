import * as authData from "./auth.js";

authData.form.addEventListener("submit", authData.registerUser);
authData.loginGoogleBtn.addEventListener("click", authData.loginWithGoogle)