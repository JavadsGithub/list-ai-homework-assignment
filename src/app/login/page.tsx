"use client";

import { loginController, LoginRequestBody } from "$/lib/api";
import { setToken, setUserData } from "$/lib/utils";
import { useCallback } from "react";
import { useForm } from "react-hook-form";

type LoginForm = Omit<LoginRequestBody, "expiresInMins">;

export default function LoginPage() {
  const form = useForm<LoginForm>();

  const onSubmit = useCallback(async (data: LoginForm) => {
    const response = await loginController({
      body: { ...data, expiresInMins: 1 },
    });

    const { accessToken, refreshToken, ...userData } = response;
    setToken({
      accessToken,
      refreshToken,
    });
    setUserData(userData);
  }, []);

  return (
    <>
      <h1>Login Page</h1>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <input placeholder="username" {...form.register("username")} />
        <input
          placeholder="password"
          {...form.register("password")}
          type="password"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
