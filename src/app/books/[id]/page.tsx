import { getSingleBookController } from "$/lib/api/controllers/books";
import { SingleBookPage } from "$/lib/components";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["book"],
    queryFn: () => getSingleBookController({ id }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <SingleBookPage />
    </HydrationBoundary>
  );
}
