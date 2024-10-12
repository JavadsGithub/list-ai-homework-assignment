"use client";

import {
  closePlayingItem,
  setPlayMode,
  useAppDispatch,
  useAppSelector,
} from "$/lib/redux";
import { Spacer } from "@nextui-org/react";
import {
  IconBookmark,
  IconChevronDown,
  IconMessage,
  IconX,
} from "@tabler/icons-react";
import { useCallback } from "react";
import styled from "styled-components";
import { RoundButton } from "./RoundButton";

export function SidePlayerHeader() {
  // >>>------------ Redux
  const dispatch = useAppDispatch();
  const playingItemTitle = useAppSelector(
    (state) => state.layout.playingItem?.title
  );
  // Redux ------------<<<

  // >>>------------ Player Actions
  const closePlayer = useCallback(() => {
    dispatch(closePlayingItem());
  }, [dispatch]);

  const minimizePlayer = useCallback(() => {
    dispatch(setPlayMode({ mode: "float" }));
  }, [dispatch]);
  // Player Actions ------------<<<

  return (
    <$>
      <RoundButton variant="dark" onClick={minimizePlayer}>
        <IconChevronDown size={20} />
      </RoundButton>

      <Spacer x={2} />

      <Title title={playingItemTitle}>{playingItemTitle}</Title>

      <ButtonsGroup>
        <RoundButton variant="dark">
          <IconBookmark size={20} />
        </RoundButton>

        <RoundButton variant="dark">
          <IconMessage size={20} />
        </RoundButton>

        <RoundButton variant="dark" onClick={closePlayer}>
          <IconX size={20} />
        </RoundButton>
      </ButtonsGroup>
    </$>
  );
}

const $ = styled.div`
  width: 100%;
  height: 70px;
  padding: 0 24px 0 24px;

  position: sticky;
  top: 0;
  left: 0;
  z-index: 99;

  display: flex;
  align-items: center;

  background-color: var(--dark-background);
`;

const Title = styled.div`
  max-width: 140px;

  overflow: hidden;

  white-space: nowrap;
  font-weight: bold;
  text-overflow: ellipsis;
`;

const ButtonsGroup = styled.div`
  margin-left: auto;

  display: flex;
  gap: 8px;
`;
