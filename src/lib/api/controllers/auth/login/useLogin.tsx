"use client";

import { setToken, setUserData } from "$/lib/utils";
import { useMutation } from "@tanstack/react-query";
import { loginController } from "./login.controller";
import { LoginRequestProps } from "./login.controller.types";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export const useLogin = () => {
  const router = useRouter();

  return useMutation({
    mutationKey: ["post-login"],
    mutationFn: (values: LoginRequestProps) => loginController(values),
    onSuccess(data) {
      const { accessToken, refreshToken, ...userData } = data;
      setToken({
        accessToken,
        refreshToken,
      });
      setUserData(userData);
      toast.success("Login Successfull.");
      router.replace("/");
    },
    onError(err: any) {
      toast.error(err.response.data.message);
    },
  });
};
