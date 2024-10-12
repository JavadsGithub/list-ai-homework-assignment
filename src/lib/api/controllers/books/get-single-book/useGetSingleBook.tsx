"use client";

import { useQuery } from "@tanstack/react-query";
import { getSingleBookController } from "./get-single-book.controller";

// We need this object in ssr requests.
export const getSingleBookConfig = (bookId: string) => ({
  queryKey: ["book"],
  queryFn: () => getSingleBookController({ id: bookId }),
});

export const useGetSingleBook = (bookId: string) => {
  return useQuery(getSingleBookConfig(bookId));
};
