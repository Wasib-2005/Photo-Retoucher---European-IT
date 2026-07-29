import { useState } from "react";
import AuthContext from "./AuthContext";

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [waitForUser, setWaitForUser] = useState();
  return (
    <AuthContext.Provider value={{ user, setUser, waitForUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
