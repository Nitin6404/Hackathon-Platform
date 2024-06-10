import { toast } from 'react-toastify';
import supabase from './supabaseClient';

export const signUp = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) {
        toast.error(error.message);
    } else {
        toast.success('Registration successful, please check your email to confirm your registration');
    }
    return { data, error };
};

export const signIn = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
        toast.error(error.message);
    } else {
        toast.success('Login successful');
    }
    return { data, error };
};

export const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
        toast.error(error.message);
    } else {
        toast.success('Logout successful');
    }
    return { error };
};
