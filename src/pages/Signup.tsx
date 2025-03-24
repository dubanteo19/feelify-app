import { RoundedIcon } from "@/components/styled-components/RoundedIcon";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Eye, EyeOff, Music } from "lucide-react";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";
const formSchema = z
  .object({
    email: z.string().email("Địa chỉ email không hợp lệ"),
    password: z.string().min(6, "Mật khẩu chứa ít nhất 6 ký tự"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Mật khẩu không trùng khớp",
    path: ["confirmPassword"],
  });
type LoginFormData = z.infer<typeof formSchema>;
export const Signup = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const onSubmit = (data: LoginFormData) => {
    alert(JSON.stringify(data));
  };
  const [showPassword, setshowPassword] = useState<boolean>(false);
  const togglePasswordShow = () => {
    setshowPassword((prev) => !prev);
  };
  return (
    <div className="flex justify-center items-center min-h-8/12  bg-linear-to-b from-primary to-blue-200 py-6">
      <div className="flex justify-center flex-col bg-secondary w-3/6 py-10  rounded-2xl shadow-x2">
        <div className="flex flex-col items-center">
          <RoundedIcon className="bg-primary text-white p-4">
            <Music />
          </RoundedIcon>
          <h2 className="font-bold text-3xl">Đăng ký</h2>
        </div>
        <div className="w-1/2 mx-auto">
          <div className="mt-5">
            <hr className="h-0.5 bg-gray-300 my-5"></hr>
            <Form {...form}>
              <form
                className="space-y-4"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <FormField
                  name="email"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <Input
                        className="ring-1"
                        placeholder="e.g. yourname@gmail.com"
                        {...field}
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="password"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mật khẩu</FormLabel>
                      <div className="relative">
                        <Input
                          type={showPassword ? "password" : "text"}
                          className="ring-1"
                          {...field}
                        />
                        <Button
                          type="button"
                          variant="link"
                          onClick={togglePasswordShow}
                          className="focus-visible:!outline-none focus:!outline-none not-hover:!border-none
                          hover:!border-none
                          absolute right-0 top-1/2 transform -translate-y-1/2"
                        >
                          {showPassword ? <EyeOff /> : <Eye />}
                        </Button>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="confirmPassword"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Xác nhận mật khẩu</FormLabel>
                      <div className="relative">
                        <Input
                          type={showPassword ? "password" : "text"}
                          className="ring-1"
                          {...field}
                        />
                        <Button
                          type="button"
                          variant="link"
                          onClick={togglePasswordShow}
                          className="focus-visible:!outline-none focus:!outline-none not-hover:!border-none
                          hover:!border-none
                          absolute right-0 top-1/2 transform -translate-y-1/2"
                        >
                          {showPassword ? <EyeOff /> : <Eye />}
                        </Button>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="text-white font-bold !rounded-full w-full"
                >
                  Đăng nhập
                </Button>
              </form>
            </Form>

            <p className="mt-3">
              Bạn có tài khoản?{" "}
              <Link className="!text-primary" to="/login">
                đăng nhập ngay
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
