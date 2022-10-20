//Crypto
import CryptoJS from "crypto-js";

export const authValidator = () => {
  const encrypted = window.localStorage.getItem("user");
  const successToken = process.env.REACT_APP_SUCCESS;
  const secretKey = process.env.REACT_APP_SECRET_KEY;
  if (encrypted !== null) {
    const user = CryptoJS.AES.decrypt(encrypted, secretKey).toString(
      CryptoJS.enc.Utf8
    );
    if (user !== successToken) {
      window.location.href = "/login";
    } else {
      return;
    }
  } else {
    window.location.href = "/login";
  }
};
