import { client } from "$/lib/api";
import { GetMeController } from "./get-me.types";

export const getMeController: GetMeController = async () => {
  try {
    const response = await client({ auth: true }).get("/auth/me");
    if (response?.data) {
      return response.data;
    } else {
      throw new Error("an error accured");
    }
  } catch (err) {
    throw err;
  }
};
