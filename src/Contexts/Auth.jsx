import { supabase } from "../SupabaseCL";
import React, { useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";
import { faL } from "@fortawesome/free-solid-svg-icons";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [refreshSession, setRefreshSession] = useState(null);
  const [sessionLoading, setSessionLoading] = useState(true);

  useEffect(() => {
    //Loading Initial session from the coookies
    const initialSession = loadSessionFromCookie();
    if (initialSession) {
      setSession(initialSession);
    }

    //Fetching session from the supabase
    const fetchSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        //hnadling errors
        setError(true);
        setMessage(error.message);
      } else {
        setSession(data.session);
        saveSessionToCookie(data.session); // Save the session data to a cookie when it's fetched
        setUser(data?.session?.user);
      }
      setLoading(false);
      setSessionLoading(false);
    };
    fetchSession();

    const { data: subscription } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === "SIGNED_IN") {
          setSession(session);
          saveSessionToCookie(session);
        } else if (event === "SIGNED_OUT") {
          setSession(null);
          Cookies.remove("supabaseSession");
        } else if (event == "PASSWORD_RECOVERY") {
          const newPassword = prompt(
            "What would you like your new password to be?"
          );
          const { data, error } = await supabase.auth.updateUser({
            password: newPassword,
          });

          if (data) alert("Password updated successfully!");
          if (error) alert("There was an error updating your password.");
        }
        setSessionLoading(false);
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  //Fetching refresh tokens
  const fetchRefreshSession = async () => {
    try {
      const { data, error } = await supabase.auth.refreshSession();
      if (error) {
        setError(true);
        setMessage(error.message);
        return;
      }
      setRefreshSession(data.session);
    } catch (error) {
      setError(true);
      setMessage(error.message);
    }
  };

  //Singin with OAuth 2.0(provider google)
  async function signInWithGoogle() {
    try {
      setError(false);
      setLoading(true);
      setMessage("Signing in with google...");
      setSuccess(false);
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: "http://localhost:3000/resume",
        },
      });
      // if (error) throw error;
      // setSuccess(true);
      // setMessage("Google account linked...");
    } catch (error) {
      setError(true);
      setSuccess(false);
      setMessage(error.message);
    }
  }

  // signing up the user with email and password and also passing the user's meta data
  async function signUp(userData) {
    try {
      setLoading(true);
      setMessage("Signing up...");
      setSuccess(false);
      setError(false);

      const full_name = userData.firstName + " " + userData.lastName;
      const { data, error } = await supabase.auth.signUp({
        email: userData.email,
        password: userData.password,

        options: {
          data: {
            first_name: userData.firstName,
            last_name: userData.lastName,
            full_name: full_name,
            display_name: full_name,
            phone: userData.phone,
          },
        },
      });
      if (error) throw error;
      setSession(data.session);
      setUser(data.user);
      setSuccess(true);
      setMessage("Sign-up successfull");
    } catch (error) {
      setError(true);
      setSuccess(false);
      setMessage(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  }

  // supabase signInWithPassword method
  async function signIn(userData) {
    try {
      setError(false);
      setLoading(true);
      setSuccess(false);
      setMessage("Singing In...");

      const { data, error } = await supabase.auth.signInWithPassword({
        email: userData.email,
        password: userData.password,
      });
      if (error) throw error;
      setSuccess(true);
      setMessage("Login successfull");
      setSession(data.session);
      setUser(data.user);
    } catch (error) {
      if (error.message === "Auth session missing!") {
        await fetchRefreshSession();
      } else {
        setError(true);
        setSuccess(false);
        setMessage("Invalid Credentials");
      }
    } finally {
      setLoading(false);
    }
  }

  //  setting the session to null
  async function signOut() {
    setLoading(true);
    setSuccess(false);
    setMessage("Logging out...");
    const { error } = await supabase.auth.signOut();
    setLoading(false);
    if (error) {
      setError(true);
      setMessage(error.message);
    } else {
      // Clear session data from cookies on successful sign-out
      Cookies.remove("supabaseSession");
      setSession(null);
      setUser(null);
    }
  }

  //function to update user's data including email in Supabase Auth
  async function updateUser(userData) {
    try {
      setError(false);
      setLoading(true);
      setSuccess(false);
      setMessage("Updating user details...");

      const { data, error } = await supabase.auth.updateUser({
        email: userData.email,

        data: {
          first_name: userData.firstName,
          last_name: userData.lastName,
          phone: userData.phone,
          display_name: userData.fullName,
          name: userData.fullName,
        },
      });

      if (error) {
        setError(true);
        setMessage(error.message);
      } else {
        setSuccess(true);
        setMessage("Updated user details...");
      }
    } finally {
      setLoading(false);
    }
  }

  //Function for password recovery
  async function passwordRecovery(userData) {
    try {
      setSuccess(false);
      setError(false);
      const { data, error } = await supabase.auth.resetPasswordForEmail(
        userData.email
      );
      if (error) throw error;
      setSuccess(true);
      setMessage(
        "A link to reset password is sent to your mail. Please also check spam folder"
      );
    } catch (error) {
      setError(true);
      setSuccess(false);
      setMessage(error.message);
    }
  }

  //funtcion to save session in cookies
  const saveSessionToCookie = (session) => {
    Cookies.set("supabaseSession", JSON.stringify(session));
  };

  //function to load session from cookies
  const loadSessionFromCookie = () => {
    const sessionData = Cookies.get("supabaseSession");
    console.log("Cookie value:", sessionData);
    return sessionData ? JSON.parse(sessionData) : null;
  };

  const value = {
    signUp,
    signIn,
    signOut,
    signInWithGoogle,
    session: session || refreshSession,
    user,
    loading,
    message,
    success,
    error,
    passwordRecovery,
    updateUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {!sessionLoading && children}
    </AuthContext.Provider>
  );
}
