import React from "react";
import { auth } from "../firebase/init.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";

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
    <div>
      <button onClick={register}>Register</button>
      <button onClick={login}>LogIn</button>
      <button onClick={logout}>LogOut</button>
      {loading ? "loading..." : user.email}
    </div>
  );
};

export default Nav;
