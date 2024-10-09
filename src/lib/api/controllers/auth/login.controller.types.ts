export interface LoginRequestBody {
  username: string;
  password: string;
  expiresInMins: number;
}

export interface LoginRequestProps {
  body: LoginRequestBody;
}

export interface LoginRequestResponse {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  accessToken: string; // JWT accessToken (for backward compatibility) in response and cookies
  refreshToken: string; // refreshToken in response and cookies
}

export type UserData = Omit<
  LoginRequestResponse,
  "accessToken" | "refreshToken"
>;

export type LoginController = (
  props: LoginRequestProps
) => Promise<LoginRequestResponse>;
