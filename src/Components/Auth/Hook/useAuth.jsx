import { useContext } from "react";
import AuthContext from "../../../Context/Auth/AuthContext";

const useAuth = () => {
  const { setUser } = useContext(AuthContext);

  // Sign In Handler
  const signIn = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // TODO: Add login logic
    setUser({ email, password });
  };

  // Sign Up Handler
  const signUp = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name?.value;
    const email = form.email.value;
    const phone = form.phone?.value;
    const password = form.password.value;
    //TODO: add sign up logic
    setUser({ name, email, phone, password });
  };

  const logOut = () => {
    console.log("logout");
    // TODO: add logout logic
    setUser(null);
  };

  return { signIn, signUp, logOut };
};

export default useAuth;
