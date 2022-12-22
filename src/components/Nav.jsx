import React from "react";
import { auth } from "../firebase/init.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import Logo from "../assets/barco__logo.png"

const Nav = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoading(false);
      if (user) {
        setUser(user);
      }
    });
  }, []);

  function register() {
    createUserWithEmailAndPassword(auth, "email@gmail.com", "test1234")
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  function login() {
    signInWithEmailAndPassword(auth, "email@gmail.com", "test1234")
      .then((data) => {
        setUser(data.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  function logout() {
    signOut(auth);
    setUser({});
  }
  return (
    <nav>
      <div className="logo__wrapper">
        <img src={Logo} alt="" className="logo__img" />
      </div>
      <div className="login__buttons">
        <button className="reg__btn" onClick={register}>Register</button>
        <button className="log__btn" onClick={login}>LogIn</button>
        <button className="logout__btn" onClick={logout}>LogOut</button>
      </div>
    </nav>
  );
};

export default Nav;
