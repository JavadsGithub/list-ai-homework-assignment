"use client";

import { selectPlayingItem, useAppSelector } from "$/lib/redux";
import { Image } from "@nextui-org/react";
import styled from "styled-components";

export function PlayerItemDetails() {
  const playingItem = useAppSelector(selectPlayingItem);

  return (
    <$>
      <ImageContainer>
        <Cover
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
  opacity: 0.7;

  font-size: 11px;
`;
const ChapterName = styled.div`
  overflow: hidden;

  white-space: nowrap;
  font-weight: bold;
`;
const ChapterCategory = styled.div`
  opacity: 0.7;

  font-size: 16px;
`;

const Cover = styled(Image)`
  object-fit: cover;
`;
