import React from "react";
import { auth } from "../firebase/init.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import Logo from "../assets/barco__logo.png";
import LogProfile from "../Ui/LogProfile.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Nav = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [logged, setLogged] = useState(false);
  const [logload, setLogload] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoading(false);
      if (user) {
        setUser(user);
        setLogged(true);
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
    setTimeout(() => {
      signInWithEmailAndPassword(auth, "email@gmail.com", "test1234")
        .then((data) => {
          setUser(data.user);
          setLogged(true);
          console.log(data.user);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }, 1300);
  }

  function logout() {
    setTimeout(() => {
      signOut(auth);
      setUser({});
      setLogged(false);
      setLogload(false)
    }, 1000);
  }

  function loadings(){
    setLogload(true)
  }

  return (
    <nav>
      <div className="logo__wrapper">
        <img src={Logo} alt="" className="logo__img" />
      </div>
      <div className="login__buttons">
        {logged ? <></> : <button className="reg__btn click" onClick={register}> Register </button>}
        {logged ? <LogProfile /> : <></>}
        {logged ? <></> : <button className={logload? "log__btn click logload" : "log__btn click"} onClick={() => { login(); loadings()}} ><span className="logtext"> LogIn </span> <FontAwesomeIcon icon="fa-solid fa-circle-notch"/> </button>}
        <h1>{user.email}</h1>
        {logged ? <button className="logout__btn click" onClick={logout}> LogOut </button> : <></>}
      </div>
    </nav>
  );
};

export default Nav;
