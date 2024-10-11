import { BOOKS } from "$/lib/constants";

export async function GET(
  request: Request,
  { params }: { params: { book_id: string } }
) {
  const book = BOOKS.find(($book) => $book.id == params.book_id);
  return Response.json({ book });
}
