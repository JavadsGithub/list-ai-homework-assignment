"use client";

import {
  DoubledItemCarousel,
  InProgressCard,
  ItemCarousel,
  PageContainer,
} from "$/lib/components";
import { BOOKS, RECENTLY_PLAYED_BOOKS } from "$/lib/config";
import { Spacer } from "@nextui-org/react";
import styled from "styled-components";

export function BooksPage() {
  return (
    <PageContainer title="Books">
      <InProgresses>
        <InProgressCard item={BOOKS[0]} />
      </InProgresses>

      <DoubledItemCarousel title="Discovery" items={BOOKS} />

      <ItemCarousel title="For You" items={BOOKS} />

      <Spacer y={4} />

      <ItemCarousel
        title="Recently Played"
        items={RECENTLY_PLAYED_BOOKS}
        showProgress
      />
    </PageContainer>
  );
}

const InProgresses = styled.div`
  margin: 12px 0 44px 24px;
`;
