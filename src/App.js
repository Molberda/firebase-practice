import { auth } from "./firebase/init.js"
import { createUserWithEmailAndPassword } from "firebase/auth";
import './App.css';

function App() {
  function register(){
     
  }
  return (
    <div className="App">
      <button onClick={register}>Register</button>
    </div>
  );
}

export default App;
