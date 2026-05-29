import { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
  return (
    <div >
      <Header/>
      <div className="absolute">

      <img
        className="w-screen h-screen object-cover"
        src= "https://assets.nflxext.com/ffe/siteui/vlv3/435e8bb8-7f1b-49cb-8da8-bff997124294/web/IN-en-20260511-TRIFECTA-perspective_ec39852e-0b48-4e8a-b415-dd8376cd83ce_large.jpg" alt="backgroung"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-75">
      <h1 className="font-bold text-3xl py-4">
        {isSignInForm? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (      //show fullname field only if the form is not Sign In
         <input 
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
            type = "text" 
            placeholder = "Email Address" 
            className="p-4 my-4 w-full bg-gray-800" />

      <input 
            type = "Password"
            placeholder = "Password" 
            className="p-4 my-4 w-full bg-gray-800" />
      <button
            className="p-4 my-6 bg-red-700 w-full rounded-lg">{isSignInForm? "Sign In" : "Sign Up"}
     </button>
      <p className="py-4 cursor-pointer"
             onClick={toggleSignInForm}>{isSignInForm? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  )
}

export default Login;
