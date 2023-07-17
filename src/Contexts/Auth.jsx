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
  const [error, setError] = useState(null);

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

  // signing up the user with email and password and also passing the user's meta data

  async function signUp(userData) {
    try {
      setLoading(true);
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
    } catch (error) {
      throw error;
    }
  }

  // supabase signInWithPassword method

  async function signIn(userData) {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: userData.email,
        password: userData.password,
      });
      if (error) throw error;
      setSession(data.session);
      setUser(data.user);
    } catch (error) {
      throw error;
    }
  }
  //  setting the session to null
  async function signOut() {
    const { error } = await supabase.auth.signOut();
    setSession(null);
    setUser(null);

    if (error) throw error;
  }
  const value = {
    signUp,
    signIn,
    signOut,
    session,
    user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
