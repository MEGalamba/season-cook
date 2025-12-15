import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


function Register() {
    
const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
 return (
    <div>
    <h2>Registo</h2>
          <form onSubmit={createUserWithEmailAndPassword}>
            <input name="email" type="email" placeholder="Email" required />
            <input name="password" type="password" placeholder="Password" required />
            <input name="same_password" type="password" placeholder="Password" required />
            <button type="submit">Login</button>
          </form>
          </div>
 )
}

export default Register;
  //register form

