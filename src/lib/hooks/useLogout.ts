import { clearAuthData } from "$/lib/utils";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import toast from "react-hot-toast";

export function useLogout() {
  const router = useRouter();

  const logout = useCallback(() => {
    clearAuthData();
    toast("Logged Out");
    router.replace("/login");
  }, [router]);

  return logout;
}
