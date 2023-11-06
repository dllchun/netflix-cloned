"use client";

import Input from "@/components/Input";
import Link from "next/link";
import { useState, useCallback } from "react";

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "Register" : "login"
    );
  }, []);

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover ">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5 z-50 ">
          <img src="/images/logo.png" alt="logo" className="h-12 " />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-80 px-16 py-16 self-center mt-2 lg:w-2/5 max-w-md rounded-md w-full ">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === "login" ? "Sign in" : "Create an account"}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === "register" && (
                <Input
                  id="username"
                  onChange={(ev: any) => setUsername(ev.target.value)}
                  value={username}
                  label="Username"
                  type="text"
                />
              )}

              <Input
                id="email"
                onChange={(ev: any) => setEmail(ev.target.value)}
                value={email}
                label="Email"
                type="email"
              />
              <Input
                id="password"
                onChange={(ev: any) => setPassword(ev.target.value)}
                value={password}
                label="Password"
                type="text"
              />
            </div>
            <button
              type="submit"
              className="bg-red-600 h-11 text-white rounded-md mt-8 w-full mb-8 hover:bg-red-700 transition cursor-pointer"
            >
              {variant === "login" ? "Login" : "Sign Up"}
            </button>
            <div className="flex">
              <p className="text-neutral-500 font-semibold">
                {variant === "login"
                  ? "First time using Netflix?"
                  : "Already have a an account?"}

                <span
                  onClick={toggleVariant}
                  className="text-white cursor-pointer "
                >
                  {variant === "login" ? "Create an account" : "Login in"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
