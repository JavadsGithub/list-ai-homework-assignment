"use client";

import { selectTopRatedPodcasts, useAppSelector } from "$/lib/redux";
import styled from "styled-components";
import { TopRatedPodcast } from "../molecules";

export function TopRatedPodcasts() {
  const topRatedPodcasts = useAppSelector(selectTopRatedPodcasts);

  return (
    <$>
      {topRatedPodcasts.map(($podcast) => (
        <TopRatedPodcast key={$podcast.id} item={$podcast} />
      ))}
    </$>
  );
}

const $ = styled.div`
  width: 100%;
  padding-right: 24px;
  padding-left: 24px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 16px;
`;
