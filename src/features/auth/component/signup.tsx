import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import googleIcon from "@/assets/google.svg";
import AuthLayout from "./auth.layout";
import { Link } from "react-router-dom";
import { Globe } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const authSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, "Password must be at least 6 characters"),
})

type FormValues = z.infer<typeof authSchema>;

export default function Signup() {
  const form = useForm<FormValues>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <AuthLayout>
      <section className="p-8 flex flex-col justify-center items-center relative">
        <div className="flex items-center gap-x-1 font-semibold text-slate-700 absolute left-7 top-6 text-sm md:hidden">
          <Globe size={18} />
          <h3>Pomotimer</h3>
        </div>

        <div className="max-w-md">
          <Form {...form}>
            <form onSubmit={() => console.log("signup")} className="space-y-4">
              <div>
                <h3 className="text-2xl font-bold">Signup</h3>
                <p className="text-slate-400 text-sm">
                  Enter your email and password to signup your account
                </p>
              </div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Email" {...field} type="email" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="Password" {...field} type="password" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="bg-blue-500 hover:bg-blue-600 w-full" type="submit">
                Signup
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t"></span>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or Continue with
                  </span>
                </div>
              </div>

              
            </form>
            <Button variant="outline" className="flex items-center justify-center w-full mt-4">
              <img src={googleIcon} alt="Google" className="w-6" />
              Google
            </Button>
          </Form>
        </div>
    
        <Button variant={"link"} type="button" className="absolute top-4 right-4">
          <Link to={"/login"}>
            Login
          </Link>
        </Button>
      </section>
    </AuthLayout>
  );
}