import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { authSchema } from "../validation/auth.validation";
import { z } from "zod";
import { signupWithEmailPassword } from "../service/api.signup";
import toast from "react-hot-toast";

type FormValues = z.infer<typeof authSchema>;

export default function useSignup() {
  const [loading, setLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      setLoading(true);

      const { data: user, error: errorSingUp } = await signupWithEmailPassword(data.email, data.password);

      if (errorSingUp) {
        toast.error("Something went wrong. Please try again")
      } 
      if (user?.user && user.user.identities && user.user.identities.length === 0) {
        toast.error("Email Alredy exists")
      } else {
        toast.success('Check your email for the confirmation link')
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { form, onSubmit, loading }
}
