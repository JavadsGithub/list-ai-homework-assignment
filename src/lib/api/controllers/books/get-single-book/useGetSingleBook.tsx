"use client";

import { useQuery } from "@tanstack/react-query";
import { getSingleProductController } from "./get-single-book.controller";

// We need this object in ssr requests.
export const getSingleBookConfig = (bookId: string) => ({
  queryKey: ["get-single-book", bookId],
  queryFn: () => getSingleProductController({ id: bookId }),
});

export const useGetSingleBook = (bookId: string) => {
  return useQuery(getSingleBookConfig(bookId));
};
