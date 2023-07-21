import { faL } from "@fortawesome/free-solid-svg-icons";
import { supabase } from "../SupabaseCL";
import React, { useState, useContext, useEffect } from "react";

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

  useEffect(() => {
    const fetchSession = async () => {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session ?? null);
        setLoading(false);
      });
    };
    fetchSession();

    const { data: subscription } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session?.user ?? null);
        setLoading(false);
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:3000/resume",
      },
    });
  }

  // signing up the user with email and password and also passing the user's meta data

  async function signUp(userData) {
    try {
      setLoading(true);
      setMessage("Singing up...");
      setSuccess(false);
      const { data, error } = await supabase.auth.signUp({
        email: userData.email,
        password: userData.password,

        options: {
          data: {
            first_name: userData.firstName,
            last_name: userData.lastName,
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
      setMessage(error.message);
    } finally {
      setLoading(false);
      setError(false);
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
      setError(true);
      setMessage("Invalid Credentials");
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

    if (error) throw error;

    setSession(null);
    setUser(null);
  }
  const value = {
    signUp,
    signIn,
    signOut,
    signInWithGoogle,
    session,
    user,
    loading,
    message,
    success,
    error,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
