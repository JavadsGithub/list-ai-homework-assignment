import { Item } from "$/lib/redux";

export interface GetSingleBookProps {
  id: string;
}

// it's actually a product
export interface GetSingleBookResponse {
  book: Item;
}

export type UserData = Omit<
  GetSingleBookResponse,
  "accessToken" | "refreshToken"
>;

export type GetSingleBookController = (
  props: GetSingleBookProps
) => Promise<GetSingleBookResponse>;
