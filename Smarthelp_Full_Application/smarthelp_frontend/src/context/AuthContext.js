import { createContext, useEffect, useReducer } from "react";   // useeffect comment karala tibbe
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user:JSON.parse(localStorage.getItem("user")) || null,    // meka comment karala tibbe
  /*user: {
    
_id: "6335de36177e009a698f1982",
username: "11",                                                           // me tika coment karala tibbe na
email: "11@gmail.com",
profilePicture: "person/5.jpeg",
password: "$2b$10$Z39xW2LrSfW/NOlsV0cbdueH2/vwxY3ZVLZ0NndVUDWi24topKu5O",
isAdmin: false,
followers: [],
followings: [],

  },*/
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  
  useEffect(()=>{
    localStorage.setItem("user", JSON.stringify(state.user))  // me peli 3 comment karala tibbe
  },[state.user])
  
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
