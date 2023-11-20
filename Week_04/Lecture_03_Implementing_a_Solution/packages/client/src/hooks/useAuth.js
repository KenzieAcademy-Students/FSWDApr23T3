import axios from "../utils/axiosConfig";
import { createContext, useReducer, useEffect, useContext } from "react";

const authContext = createContext();

const initialState = {
  isAuthenticated: null,
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        isAuthenticated: true,
        user: action.user,
      };
    case "SIGN_OUT":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

const useAuthProvider = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const signIn = async (email, password) => {
    const response = await axios.post("/auth/signin", { email, password });

    dispatch({ type: "SIGN_IN", user: response.data.user });
    localStorage.setItem("KenzieCartUser", JSON.stringify(response.data));
  };

  const signUp = async (email, password, confirmPassword) => {
    try {
      await axios.post("/auth/signup", {
        email,
        password,
        confirmPassword,
      });
      await signIn(email, password);
    } catch (error) {
      throw error;
    }
  };

  const signOut = async () => {
    dispatch({ type: "SIGN_OUT" });
    localStorage.removeItem("KenzieCartUser");
  };

  const loadLocalUser = () => {
    if (state.isAuthenticated === null) {
      const savedAuth =
        JSON.parse(localStorage.getItem("KenzieCartUser")) || false;

      if (savedAuth) dispatch({ type: "SIGN_IN", user: savedAuth.user });
    }
  };

  return {
    auth: state,
    signIn,
    signUp,
    signOut,
    loadLocalUser,
  };
};

export const AuthProvider = ({ children }) => {
  const { loadLocalUser, ...auth } = useAuthProvider();

  useEffect(loadLocalUser, [loadLocalUser]);

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

const useAuth = () => {
  return useContext(authContext);
};

export default useAuth;
