"use client";

import { useQuery } from "@tanstack/react-query";
import { getMeController } from "./get-me.controller";

// We need this object in ssr requests.
export const getMeConfig = () => ({
  queryKey: ["get-me"],
  queryFn: () => getMeController(),
});

export const useGetMe = () => {
  return useQuery(getMeConfig());
};
