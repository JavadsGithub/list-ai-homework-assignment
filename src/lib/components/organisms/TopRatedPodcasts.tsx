"use client";

import { TOP_RATED_PODCASTS } from "$/lib/config";
import styled from "styled-components";
import { TopRatedPodcast } from "../molecules";

export function TopRatedPodcasts() {
  return (
    <$>
      {TOP_RATED_PODCASTS.map(($podcast) => (
        <TopRatedPodcast key={$podcast.id} item={$podcast} />
      ))}
    </$>
  );
}

const $ = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 16px;
`;
