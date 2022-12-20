import { auth } from "./firebase/init.js"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import './App.css';
import React from "react";

function App() {
  const [user, setUser] = React.useState({});
  function register(){
    createUserWithEmailAndPassword(auth, "email@gmail.com", "test1234")
    .then((data) => {
      console.log(data)
    })
    .catch((error) => {
      console.log(error.message)
    })
  }

    function login(){
      signInWithEmailAndPassword(auth, "email@gmail.com", "test1234")
      .then((data) => {
        setUser(data.user)
      })
      .catch((error) => {
        console.log(error.message)
      })
    }

    function logout(){
      signOut(auth)
      setUser({})
    }

  return (
    <div className="App">
      <button onClick={register}>Register</button>
      <button onClick={login}>LogIn</button>
      <button onClick={logout}>LogOut</button>
      {user.email}
    </div>
  );
}

export default App;
