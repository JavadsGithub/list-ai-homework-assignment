"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export function useQueryParams() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const pushQueryString = useCallback((name: string, value: string) => {
    router.push(pathname + "?" + createQueryString(name, value));
  }, []);

  return {
    createQueryString,
    pushQueryString,
  };
}
