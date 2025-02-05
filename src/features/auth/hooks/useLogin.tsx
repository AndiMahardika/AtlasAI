import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { authSchema } from "../validation/auth.validation";
import { loginWithEmailPassword } from "../service/api.login";
import toast from "react-hot-toast";

type FormValues = z.infer<typeof authSchema>;

export default function useLogin() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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

      const { data: _user, error } = await loginWithEmailPassword(data.email, data.password);

      if (error) {
        toast.error(error.message)
      } else {
        navigate("/");
      }

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { form, onSubmit, loading }
}