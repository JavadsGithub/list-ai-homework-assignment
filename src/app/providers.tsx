"use client";

import { store } from "$/lib/redux/store";
import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { Provider as ReduxProvider } from "react-redux";

interface ProviderProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProviderProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ReduxProvider store={store}>
        <NextUIProvider>
          {children}
          <Toaster />
        </NextUIProvider>
      </ReduxProvider>
    </QueryClientProvider>
  );
}
