import './App.css';


function App() {

  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user)=> {
      setLoading(false)
      if (user){
        setUser(user)
      }
    })
   }, []);

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
      {loading ? 'loading...' : user.email}
    </div>
  );
}

export default App;
