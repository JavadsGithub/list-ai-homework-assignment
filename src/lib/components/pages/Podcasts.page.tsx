"use client";

import {
  ItemCarousel,
  PageContainer,
  TopRatedPodcasts,
} from "$/lib/components";
import { RECENTLY_PLAYED_PODCASTS } from "$/lib/config";
import { PODCASTS } from "$/lib/config/PODCASTS";
import { Spacer } from "@nextui-org/react";

export function PodcastsPage() {
  return (
    <PageContainer title="Podcast">
      <Spacer y={6} />

      <TopRatedPodcasts />

      <Spacer y={6} />

      <ItemCarousel title="For You" items={PODCASTS} />

      <Spacer y={4} />

      <ItemCarousel
        title="Recently Played"
        items={RECENTLY_PLAYED_PODCASTS}
        showProgress
      />
    </PageContainer>
  );
}
