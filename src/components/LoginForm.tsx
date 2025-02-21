"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

//shadcn
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  //   FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import signIn from "@/lib/auth/signIn";

const formSchema = z.object({
  username: z.string().min(1, {
    message: "وارد کردن نام کاربری اجباری است.",
  }),
  password: z.string().min(1, {
    message: "وارد کردن پسورد اجباری است.",
  }),
});

const LoginForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function handleSubmit(data: z.infer<typeof formSchema>) {
    try {
      await signIn({
        // but Amir uses SSR form and page
        username: data.username,
        password: data.password,
      });
    } catch (error) {
      if ((error as Error)?.message === "NEXT_REDIRECT") {
        // reason use that if redirect api nature
        toast({
          title: "شما با موفقیت وارد شدید.",
          description: `سلام ${data.username}`,
        });
      } else {
        toast({
          title: "خطا:",
          description: (error as Error)?.message,
          variant: "destructive",
        });
      }
    }
  }

  return (
    <div className="w-full max-w-[480px]  shadow-md p-10 rounded-md">
      {/* w-[400px] */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8 ">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-bold text-zinc-500 dark:text-white">
                  نام‌کاربری
                </FormLabel>
                <FormControl>
                  <Input
                    className="dark:placeholder:text-white  bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                    placeholder="نام‌کاربری را وارد کنید"
                    type="text"
                    autoComplete="username"
                    {...field}
                  />
                  {/* dark:placeholder:text-white  */}
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
                <FormLabel className=" text-xs font-bold text-zinc-500 dark:text-white">
                  پسورد
                </FormLabel>
                <FormControl>
                  <Input
                    className="dark:placeholder:text-white bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                    placeholder="پسورد را وارد کنید"
                    type="password"
                    autoComplete="current-password"
                    {...field}
                  />
                  {/* dark:placeholder:text-white  */}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="w-full dark:bg-slate-800 dark:text-white">
            وارد شدن
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
