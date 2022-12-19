import { auth } from "./firebase/init.js"
import { createUserWithEmailAndPassword } from "firebase/auth";
import './App.css';

function App() {
  function register(){
    createUserWithEmailAndPassword(auth, "email@gmail.com", "test1234")
    .then((user) => {
      console.log(user)
    })
    .catch((error) => {
      console.log(error)
    })
  }
  return (
    <div className="App">
      <button onClick={register}>Register</button>
    </div>
  );
}

export default App;
