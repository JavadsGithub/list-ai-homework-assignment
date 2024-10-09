import { client } from "$/lib/api";
import { LoginController } from "./login.controller.types";

export const loginController: LoginController = async ({ body }) => {
  try {
    const response = await client().post("/auth/login", body);
    if (response?.data) {
      return response.data;
    } else {
      throw new Error("an error accured");
    }
  } catch (err) {
    throw err;
  }
};
