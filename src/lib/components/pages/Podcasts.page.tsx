"use client";

import {
  ItemCarousel,
  PageContainer,
  TopRatedPodcasts,
} from "$/lib/components";
import { useAppSelector } from "$/lib/redux";
import { Spacer } from "@nextui-org/react";

export function PodcastsPage() {
  const { forYouPodcasts, recentlyPlayerPodcasts } = useAppSelector(
    (state) => ({
      forYouPodcasts: state.podcasts.forYou,
      recentlyPlayerPodcasts: state.podcasts.recentlyPlayed,
    })
  );

  return (
    <PageContainer title="Podcast">
      <Spacer y={6} />

      <TopRatedPodcasts />

      <Spacer y={6} />

      <ItemCarousel title="For You" items={forYouPodcasts} />

      <Spacer y={4} />

      <ItemCarousel
        items={recentlyPlayerPodcasts}
        title="Recently Played"
        showProgress
      />
    </PageContainer>
  );
}
