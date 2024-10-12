"use client";

import { UserData } from "$/lib/api";
import { decryptString, encryptString } from "$/lib/utils";
import { AxiosInstance } from "axios";
import Cookies from "js-cookie";

export interface Tokens {
  accessToken: string;
  refreshToken: string;
}

export function setToken(tokens: Tokens): void {
  Cookies.set(process.env["ACCESS_TOKEN"]!, encryptString(tokens.accessToken));
  Cookies.set(
    process.env["REFRESH_TOKEN"]!,
    encryptString(tokens.refreshToken)
  );
}

export function getTokens(): Partial<Tokens> {
  let accessToken = Cookies.get(process.env["ACCESS_TOKEN"]!);
  let refreshToken = Cookies.get(process.env["REFRESH_TOKEN"]!);

  if (accessToken) accessToken = decryptString(accessToken);
  if (refreshToken) refreshToken = decryptString(refreshToken);

  return {
    accessToken,
    refreshToken,
  };
}

export function removeTokens(target?: "accessToken" | "refreshToken") {
  if (target == "accessToken") {
    Cookies.remove(process.env["ACCESS_TOKEN"]!);
  } else if (target == "refreshToken") {
    Cookies.remove(process.env["REFRESH_TOKEN"]!);
  } else {
    Cookies.remove(process.env["ACCESS_TOKEN"]!);
    Cookies.remove(process.env["REFRESH_TOKEN"]!);
  }
}

export function setUserData(data: UserData): void {
  Cookies.set(process.env["USER_DATA"]!, encryptString(JSON.stringify(data)));
}
export function getUserData(): UserData | undefined {
  const userData = Cookies.get(process.env["USER_DATA"]!);
  if (userData) {
    return JSON.parse(decryptString(userData));
  }
}

export function clearAuthData() {
  Cookies.remove(process.env["ACCESS_TOKEN"]!);
  Cookies.remove(process.env["REFRESH_TOKEN"]!);
  Cookies.remove(process.env["USER_DATA"]!);
}

// refreshes the token and inform the caller that the token has refreshed.
export async function refreshToken(
  axiosInstance: AxiosInstance
): Promise<boolean> {
  const { refreshToken } = getTokens();

  if (refreshToken) {
    try {
      const response = await axiosInstance.post("/auth/refresh", {
        refreshToken,
        expiresInMins: 1,
      });
      if (response.data.accessToken) {
        setToken(response.data);
        return true;
      } else {
        return false;
      }
    } catch (_) {
      return false;
    }
  } else {
    return false;
  }
}
