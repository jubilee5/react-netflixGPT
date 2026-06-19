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
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
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

  const handleGptSearchClick = () => {
   dispatch(toggleGptSearchView());
  }

  const handleLanguageChange = (e) => {
   dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className="absolute w-full px-4 md:px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row md:justify-between items-center">  
    <img 
    className="w-32 md:w-44 mx-auto md:mx-0"
    src = {logo} 
    alt="logo" />

    {user && (

    <div className="flex items-center justify-center gap-2 p-2">
      {showGptSearch && (
           <select className="w-full md:w-auto py-2 px-3 bg-black text-white rounded-md" onChange={handleLanguageChange}>
      {SUPPORTED_LANGUAGES.map((lang) => (
        <option key={lang.identifier} value={lang.identifier}>{lang.name}
        </option>
      ))}
     
    </select>
      )}
 
      <button className="w-full md:w-auto py-2 px-4 text-sm md:text-base bg-purple-800 text-white rounded-md"
      onClick={handleGptSearchClick}
      >
       {showGptSearch ? "Homepage" : "GPT Search"} 
      </button>
      <img
      className="w-10 h-10 md:w-12 md:h-12  cursor-pointer "
      alt="userIcon"
      src={user?.photoURL}
      />    
      <button
       onClick={handleSignOut} 
       className="hidden md:block font-bold text-white text-sm md:text-base"
       >
        (Sign Out)
        </button>
      </div>
    )}
    </div>
  )
}

export default Header
