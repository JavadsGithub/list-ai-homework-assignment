"use client";

import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

interface ProviderProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProviderProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        {children}
        <Toaster />
      </NextUIProvider>
    </QueryClientProvider>
  );
}
