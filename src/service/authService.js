//Crypto
import CryptoJS from "crypto-js";

class AuthService {
  // 로그인 유무
  async signIn() {
    const encrypted = window.localStorage.getItem("user");
    const successToken = process.env.REACT_APP_SUCCESS;
    const secretKey = process.env.REACT_APP_SECRET_KEY;
    if (encrypted !== null) {
      const user = CryptoJS.AES.decrypt(encrypted, secretKey).toString(
        CryptoJS.enc.Utf8
      );
      if (user !== successToken) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }

  //로그아웃
  async signOut() {
    window.localStorage.removeItem("user");
  }
}

export default AuthService;
