import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "./../Firebase/Firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();

  const signInUsingGoogle = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider)
      .then((res) => setUser(res.user))
      .finally(() => setIsLoading(false));
  };

  const handleRegistration = () => {
    setIsLoading(true);
    document.querySelectorAll(".customInput").forEach((i) => (i.value = ""));

    if (!/(?=.{6,})/.test(password)) {
      setError("Password must be at least 6 characters long");
      return;
    }
    return createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setUser(res.user);
        setError("");
        setUsername();
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const handleLogin = () => {
    setIsLoading(true);
    document.querySelectorAll(".customInput").forEach((i) => (i.value = ""));

    if (!/(?=.{6,})/.test(password)) {
      setError("Password must be at least 6 characters long");
      return;
    }
    return signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setUser(res.user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const setUsername = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
    }).then((res) => {});
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    signInUsingGoogle,
    logOut,
    isLoading,
    handleRegistration,
    handleEmail,
    handlePassword,
    error,
    handleLogin,
    handleName,
  };
};

export default useFirebase;
