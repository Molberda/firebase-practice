import { auth } from "./firebase/init.js"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import './App.css';

function App() {
  function register(){
    createUserWithEmailAndPassword(auth, "email@gmail.com", "test1234")
    .then((user) => {
      console.log(user)
    })
    .catch((error) => {
      console.log(error.message)
    })
  }

    function login(){
      signInWithEmailAndPassword(auth, "email@gmail.com", "test1234")
      .then((user) => {
        console.log(user)
      })
      .catch((error) => {
        console.log(error.message)
      })
    }

    function logout(){

    }

  return (
    <div className="App">
      <button onClick={register}>Register</button>
      <button onClick={login}>LogIn</button>
      <button onClick={logout}>LogOut</button>
    </div>
  );
}

export default App;
