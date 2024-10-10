"use client";

import { TopRatedPodcasts } from "$/lib/components";
import { Spacer } from "@nextui-org/react";
import styled from "styled-components";

export function PodcastsPage() {
  return (
    <$>
      <Spacer y={6} />

      <TopRatedPodcasts />
    </$>
  );
}

const $ = styled.div`
  width: 100%;
  padding: 0 26px 400px 26px;

  display: flex;
  flex-direction: column;
`;
