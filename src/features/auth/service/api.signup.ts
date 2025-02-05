import { supabase } from "@/utils/supabase";

export const signupWithEmailPassword = async (email: string, password: string) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password
    });
    if (error) throw error;
    return { data, error };
  } catch (error) {
    return { data: null, error };
  }
}