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
  const [outload, setOutload] = useState(false);

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
        alert("Registered successfully")
        setOutload(false)
      })
      .catch((error) => {
        alert(error)
      });
  }

  function login() {
    setLogload(true);
    setTimeout(() => {
      signInWithEmailAndPassword(auth, "email@gmail.com", "test1234")
        .then((data) => {
          setUser(data.user);
          setLogged(true);
          setOutload(false);
        })
        .catch((error) => {
          alert(error)
          setLogload(false)
        });
    }, 1300);
  }

  function logout() {
    setOutload(true);
    setTimeout(() => {
      signOut(auth);
      setUser({});
      setLogged(false);
      setLogload(false);
    }, 1000);
  }

  return (
    <nav>
      <div className="logo__wrapper">
        <img src={Logo} alt="" className="logo__img" />
      </div>
      <div className="login__buttons">
        {logged ? (
          <></>
        ) : (
          <button className="reg__btn click" onClick={register}>
            {" "}
            Register{" "}
          </button>
        )}
        {logged ? <LogProfile /> : <></>}
        {logged ? (
          <></>
        ) : (
          <button
            className={logload ? "log__btn logload" : "log__btn click"}
            onClick={login}
          >
            <span className="btntext"> LogIn </span>{" "}
            <FontAwesomeIcon icon="fa-solid fa-circle-notch" />{" "}
          </button>
        )}
        <h1>{user.email}</h1>
        {logged ? (
          <button
            className={
              outload ? "logout__btn outload" : "logout__btn click"
            }
            onClick={logout}
          >
            {" "}
            <span className="btntext"> LogOut </span>{" "}
            <FontAwesomeIcon icon="fa-solid fa-circle-notch" />{" "}
          </button>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
};

export default Nav;
