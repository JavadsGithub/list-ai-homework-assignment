import axios from "axios";
import { GetSingleBookController } from "./get-single-book.controller.types";

export const getSingleBookController: GetSingleBookController = async ({
  id,
}) => {
  try {
    const response = await axios.get(`/api/books/${id}`);
    if (response?.data) {
      return response.data;
    } else {
      throw new Error("an error accured");
    }
  } catch (err) {
    throw err;
  }
};
