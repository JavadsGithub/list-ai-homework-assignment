"use client";

import { useGetSingleBook } from "$/lib/api/controllers/books";
import {
  PageContainer,
  Rating,
  SingleBookDescription,
  SingleBookDetails,
  SingleBookSpecifications,
} from "$/lib/components";
import { Spacer, Spinner } from "@nextui-org/react";
import { useParams } from "next/navigation";
import { useMemo } from "react";
import styled from "styled-components";

export function SingleBookPage() {
  const { id } = useParams();
  const getSingleBookQuery = useGetSingleBook(String(id));
  const book = useMemo(
    () => getSingleBookQuery.data?.book,
    [getSingleBookQuery.data?.book]
  );

  return (
    <PageContainer title={book?.title} compact>
      <InnerContainer>
        {getSingleBookQuery.isLoading ? (
          <Spinner />
        ) : (
          <SingleBookDetails book={book!} />
        )}

        <Spacer y={10} />

        <SingleBookSpecifications />

        <Rating />

        <SingleBookDescription />
      </InnerContainer>
    </PageContainer>
  );
}

const InnerContainer = styled.div`
  padding: 0 26px 0 26px;

  display: flex;
  flex-direction: column;
`;
