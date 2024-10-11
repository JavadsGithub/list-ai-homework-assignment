"use client";

import { UserData } from "$/lib/api";
import { decryptString, encryptString } from "$/lib/utils";
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
  let refreshToken = Cookies.get(process.env["REFERSH_TOKEN"]!);

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
