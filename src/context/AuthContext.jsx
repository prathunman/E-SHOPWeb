import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const value = {
    isLogin,
    setIsLogin,
  }

  return <AuthContext.Provider value={value}>
    {children}
    </AuthContext.Provider>;
};

export default AuthContextProvider;