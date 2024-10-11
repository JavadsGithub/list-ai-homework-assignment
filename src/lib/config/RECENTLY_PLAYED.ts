import { Item } from "$/lib/redux";
import { BOOKS } from "./BOOKS";
import { PODCASTS } from "./PODCASTS";

export const RECENTLY_PLAYED_BOOKS: Item[] = BOOKS.slice(0, 4);
export const RECENTLY_PLAYED_PODCASTS: Item[] = PODCASTS.slice(0, 4);
