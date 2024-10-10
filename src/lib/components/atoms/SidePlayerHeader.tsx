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
  const selectedItemTitle = useAppSelector(
    (state) => state.layout.playingItem?.title
  );
  const dispatch = useAppDispatch();

  const closePlayer = useCallback(() => {
    dispatch(closePlayingItem());
  }, [dispatch, closePlayingItem]);

  const minimizePlayer = useCallback(() => {
    dispatch(setPlayMode({ mode: "float" }));
  }, [dispatch, setPlayMode]);

  return (
    <$>
      <RoundButton variant="dark" onClick={minimizePlayer}>
        <IconChevronDown size={20} />
      </RoundButton>

      <Spacer x={2} />

      <Title title={selectedItemTitle}>{selectedItemTitle}</Title>

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
  font-weight: bold;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const ButtonsGroup = styled.div`
  margin-left: auto;

  display: flex;
  gap: 8px;
`;
