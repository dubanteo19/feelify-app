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
import { on } from "events";
import { Button } from "@/components/ui/button";
import { useState } from "react";
const OtherLogins = () => {
  return (
    <div className="flex flex-col gap-2 mt-4 ">
      <div className="rounded-full px-4 py-2 border border-gray-900 flex  items-center">
        <div className="w-8 h-8 ">
          <img
            className="w-full h-auto"
            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
          />
        </div>
        <p className="font-bold ml-6">Đăng nhập với Google</p>
      </div>
      <div className="rounded-full px-4 py-2 border border-gray-900 flex  items-center">
        <div className="w-8 h-8 ">
          <img
            className="w-full h-auto"
            src="https://z-m-static.xx.fbcdn.net/rsrc.php/v4/yD/r/5D8s-GsHJlJ.png"
          />
        </div>
        <p className="font-bold ml-6">Đăng nhập với Facebook</p>
      </div>
    </div>
  );
};
const formSchema = z.object({
  email: z.string().email("Địa chỉ email không hợp lệ"),
  password: z.string().min(6, "Mật khẩu chứa ít nhất 6 ký tự"),
});
type LoginFormData = z.infer<typeof formSchema>;
export const Login = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
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
          <h2 className="font-bold text-3xl">Đăng nhập</h2>
        </div>
        <div className="w-1/2 mx-auto">
          <OtherLogins />
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
                <Button
                  type="submit"
                  className="text-white font-bold !rounded-full w-full"
                >
                  Đăng nhập
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
