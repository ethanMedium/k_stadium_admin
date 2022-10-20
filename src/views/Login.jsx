import React from "react";

import { LockClosedIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";

//Crypto
import CryptoJS from "crypto-js";
const password = process.env.REACT_APP_LOGIN_KEY;
const successToken = process.env.REACT_APP_SUCCESS;
const secretKey = process.env.REACT_APP_SECRET_KEY;

function Login() {
  const navigate = useNavigate();
  const formValidator = (e) => {
    e.preventDefault();
    const userPassword = e.target.password.value;
    if (userPassword === password) {
      const encrypted = CryptoJS.AES.encrypt(successToken, secretKey);
      window.localStorage.setItem("user", encrypted);
      navigate("/");
    } else {
      window.alert("비밀번호가 틀립니다.");
      e.target.password.value = "";
    }
  };

  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              K STADIUM MONITORING
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={formValidator}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
