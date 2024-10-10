"use client";

import {
  ItemCarousel,
  PodcastsPageHeader,
  TopRatedPodcasts,
} from "$/lib/components";
import { BOOKS } from "$/lib/config";
import { Spacer } from "@nextui-org/react";
import styled from "styled-components";

export function PodcastsPage() {
  return (
    <$>
      <PodcastsPageHeader />

      <Spacer y={6} />

      <TopRatedPodcasts />

      <Spacer y={6} />

      <ItemCarousel title="For You" items={BOOKS} />
    </$>
  );
}

const $ = styled.div`
  width: 100%;
  max-width: calc(100vw - 280px);
  padding-bottom: 400px;

  overflow: hidden;

  display: flex;
  flex-direction: column;

  position: relative;
`;
