import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
//import { LOGO } from "../utils/constants";
import logo from "../assets/logo.png";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)           //took this code from firebase docs
    .then(() => {
}).catch((error) => {
  // An error happened.
  navigate("/error");
});
  }
   useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(user){
        const {uid, email, displayName, photoURL} = user; 
        dispatch(addUser({ 
          uid: uid,
           email: email,
            displayName: displayName,
             photoURL: photoURL
            })
          );
      
        navigate("/browse");
        }else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => {
      unsubscribe();
    };              //unsubscribe helps to remove the listener on unmount
  }, [dispatch, navigate]);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex  justify-between">  
    <img 
    className="w-56  "
    src = {logo} 
    alt="logo" />

    {user && (

    <div className="flex p-2">
      <img
      className="w-12 h-12  cursor-pointer "
      alt="userIcon"
      src={user?.photoURL}
      />    
      <button onClick={handleSignOut} className="font-bold text-white">(Sign Out)</button>
      </div>
    )}
    </div>
  )
}

export default Header
