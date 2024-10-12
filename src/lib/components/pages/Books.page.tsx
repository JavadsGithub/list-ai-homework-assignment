"use client";

import {
  DoubledItemCarousel,
  InProgressCard,
  ItemCarousel,
  PageContainer,
} from "$/lib/components";
import { useAppSelector } from "$/lib/redux";
import { Spacer } from "@nextui-org/react";
import styled from "styled-components";

export function BooksPage() {
  const {
    discoveryPodcasts,
    forYouPodcasts,
    recentlyPlayedPodcasts,
    inProgressBook,
  } = useAppSelector((state) => ({
    discoveryPodcasts: state.podcasts.discovery,
    forYouPodcasts: state.podcasts.forYou,
    recentlyPlayedPodcasts: state.podcasts.recentlyPlayed,
    inProgressBook: state.books.inProgress,
  }));

  return (
    <PageContainer title="Books">
      <InProgresses>
        <InProgressCard item={inProgressBook} />
      </InProgresses>

      <DoubledItemCarousel title="Discovery" items={discoveryPodcasts} />

      <ItemCarousel title="For You" items={forYouPodcasts} />

      <Spacer y={4} />

      <ItemCarousel
        items={recentlyPlayedPodcasts}
        title="Recently Played"
        showProgress
      />
    </PageContainer>
  );
}

const InProgresses = styled.div`
  margin: 12px 0 44px 24px;
`;
