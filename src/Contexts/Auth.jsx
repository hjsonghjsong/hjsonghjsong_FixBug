import { supabase } from "../SupabaseCL";
import React, { useState, useContext, useEffect } from "react";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    setLoading(false);

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

  async function signUp(data) {
    try {
      setLoading(true);
      const { user, error } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        phone: data.phone,
        options: {
          data: {
            first_name: data.firstName,
            last_name: data.lastName,
          },
        },
      });
      if (error) throw error;
      setSession(user.session);
    } catch (error) {
      console.error(error);
    }
  }

  async function signIn(data) {
    try {
      const { user, error } = await supabase.auth.signInWithPassword(data);

      if (error) throw error;
      setSession(user.session);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  async function signOut() {
    try {
      await supabase.auth.signOut();
      setSession(null);
    } catch (error) {
      console.error(error);
    }
  }

  const value = {
    signUp,
    signIn,
    signOut,
    session,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
