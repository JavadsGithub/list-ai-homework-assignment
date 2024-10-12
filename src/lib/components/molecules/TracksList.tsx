"use client";

import { PLAYER_TRACKS } from "$/lib/constants";
import { IconPlayerPlayFilled } from "@tabler/icons-react";
import styled from "styled-components";

export function TracksList() {
  return (
    <$>
      {PLAYER_TRACKS.map(($track) => (
        <Track key={$track.trackNumber}>
          <Id>{$track.trackNumber}</Id>

          <Name>{$track.title}</Name>

          <PlayButton>
            <IconPlayerPlayFilled size={13} />
          </PlayButton>
        </Track>
      ))}
    </$>
  );
}

const $ = styled.ul`
  width: 100%;
  padding: 0 20px 40px 20px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Track = styled.li`
  display: flex;
  align-items: center;

  font-size: 14px;

  transition-duration: 500ms;

  &:hover {
    opacity: 0.5;

    cursor: pointer;
  }
`;

const Id = styled.div`
  margin-right: 20px;
`;

const Name = styled.div``;

const PlayButton = styled.button`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 2px solid white;
  margin-left: auto;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: black;
`;
