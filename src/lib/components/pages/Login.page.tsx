"use client";

import { LoginRequestBody, useLogin } from "$/lib/api";
import { Button, Input, Spacer } from "@nextui-org/react";
import clsx from "clsx";
import { useCallback } from "react";
import { useForm } from "react-hook-form";

type LoginForm = Omit<LoginRequestBody, "expiresInMins">;

export const LoginPage = () => {
  const form = useForm<LoginForm>();

  const loginMutation = useLogin();

  const onSubmit = useCallback(async (data: LoginForm) => {
    loginMutation.mutate({
      body: {
        ...data,
        expiresInMins: 1,
      },
    });
  }, []);

  return (
    <>
      <Spacer y={10} />
      <div
        className={clsx("text-center text-[25px] font-bold mb-6", "md:hidden")}
      >
        List AI
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <>
          <div className="w-full flex flex-col gap-4 mb-4">
            <Input
              variant="bordered"
              label="Username"
              placeholder="emilys"
              required
              {...form.register("username")}
            />
            <Input
              variant="bordered"
              label="Password"
              type="password"
              placeholder="emilyspass"
              required
              {...form.register("password")}
            />
          </div>

          <Spacer y={4} />

          <Button
            isLoading={loginMutation.isPending}
            type="submit"
            variant="flat"
            color="primary"
          >
            Login
          </Button>
        </>
      </form>
    </>
  );
};
