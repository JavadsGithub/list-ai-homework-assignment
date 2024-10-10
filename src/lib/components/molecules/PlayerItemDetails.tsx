"use client";

import { selectPlayingItem, useAppSelector } from "$/lib/redux";
import { Image } from "@nextui-org/react";
import styled from "styled-components";

export function PlayerItemDetails() {
  const playingItem = useAppSelector(selectPlayingItem);

  return (
    <$>
      <ImageContainer>
        <Image
          width={145}
          height={145}
          src={playingItem?.coverImage}
          alt="cover"
        />
      </ImageContainer>

      <Details>
        <Chapter>{playingItem?.author}</Chapter>
        <ChapterName>{playingItem?.description}</ChapterName>
        <ChapterCategory>{playingItem?.itemType}</ChapterCategory>
      </Details>
    </$>
  );
}

const $ = styled.div`
  width: 100%;
  height: 330px;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 240px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Details = styled.div`
  width: 100%;
  padding: 0 20px 0 20px;

  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Chapter = styled.div`
  font-size: 11px;
  opacity: 0.7;
`;
const ChapterName = styled.div`
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
`;
const ChapterCategory = styled.div`
  font-size: 16px;
  opacity: 0.7;
`;
