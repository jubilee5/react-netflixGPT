import { useRef, useState } from "react";
import Header from "./Header";
import { checkvalidData } from "../utils/validate";
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword , updateProfile} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";


const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const dispatch = useDispatch();

    const name = useRef(null) 
    const email = useRef(null)
    const password = useRef(null)

    const handleButtonClick = () => {
        // validate form data
    const message =   checkvalidData(name.current?.value, email.current.value, password.current.value);
    setErrorMessage(message);

  if(message ) return;

  // sign in/sign up
  if(!isSignInForm){
    // sign up
    createUserWithEmailAndPassword(
      auth,
      email.current.value, 
      password.current.value
    )
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {             //took this code from firebase docs
      displayName: name.current.value,
       photoURL: USER_AVATAR
      }).then(() => {
        const {uid, email, displayName, photoURL} = auth; 
        dispatch
        (addUser({ 
          uid: uid,
          email: email,
          displayName: displayName,
          photoURL: photoURL
        })
      );
       
      }).catch((error) => {
       setErrorMessage(error.message);
      });

    console.log(user);
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
     setErrorMessage(errorCode + " - " + errorMessage);
  });

  }else{
    // sign in
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + " - " + errorMessage);
  });

    }

    }

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
  return (
    <div >
      <Header/>
      <div className="absolute">

      <img
        className="w-screen h-screen object-cover"
        src= "https://assets.nflxext.com/ffe/siteui/vlv3/435e8bb8-7f1b-49cb-8da8-bff997124294/web/IN-en-20260511-TRIFECTA-perspective_ec39852e-0b48-4e8a-b415-dd8376cd83ce_large.jpg" alt="background"
        />
      </div>
      <form onSubmit={(e) => e.preventDefault()}  //e.preventDefault() is used to prevent the default form submission behavior. 
      className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-75">
      <h1 className="font-bold text-3xl py-4">
        {isSignInForm? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (      //show fullname field only if the form is not Sign In
         <input
               ref = {name}
               type = "text" 
               placeholder = "Full Name" 
               className="p-4 my-4 w-full bg-gray-800" />
        )} 
        {!isSignInForm && (      //show fullname field only if the form is not Sign In
         <input 
               
               type = "tel" 
               placeholder = "Mobile Number" 
               className="p-4 my-4 w-full bg-gray-800" />
        )}            
      <input 
           ref = {email}
            type = "text" 
            placeholder = "Email Address"   
            className="p-4 my-4 w-full bg-gray-800" />

      <input 
            ref = {password}
            type = "Password"
            placeholder = "Password" 
            className="p-4 my-4 w-full bg-gray-800" />
      <p className="text-red-800 font-bold text-lg">{errorMessage}</p>
      <button
            className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>{isSignInForm? "Sign In" : "Sign Up"}
     </button>
      <p className="py-4 cursor-pointer" 
             onClick={toggleSignInForm}>{isSignInForm? "New User? Sign Up Now" : "Already Registered? Sign In Now"}
        </p>
       <p className="fixed bottom-0 left-0 w-full bg-yellow-300 text-black text-center py-2 text-lg font-medium border-t-2 border-yellow-500 z-50">
           ⚠️ Educational Project Only. This website is not affiliated with, endorsed by, or associated with Netflix.
      </p>
      </form>
       
    </div>
  )
}

export default Login;
