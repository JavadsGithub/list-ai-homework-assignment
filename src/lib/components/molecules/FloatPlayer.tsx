"use client";

import { closePlayingItem, setPlayMode, useAppSelector } from "$/lib/redux";
import { Image } from "@nextui-org/react";
import { IconPlayerPause, IconX } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { RoundButton } from "../atoms";

export function FloatPlayer() {
  const { playMode, playingItem } = useAppSelector((state) => ({
    playMode: state.layout.playMode,
    playingItem: state.layout.playingItem,
  }));
  const dispatch = useDispatch();

  const show = useMemo(() => playMode == "float", [playMode]);

  const maximizePlayer = useCallback(() => {
    dispatch(setPlayMode({ mode: "drawer" }));
  }, [setPlayMode, dispatch]);

  const closePlayer = useCallback(() => {
    dispatch(closePlayingItem());
  }, [closePlayingItem, dispatch]);

  const animation = useMemo(
    () =>
      playMode == null
        ? "-150px"
        : playMode == "float"
        ? ["-150px", "40px", "26px"]
        : "-150px",
    [playMode]
  );

  return (
    <$
      animate={{
        bottom: animation,
      }}
      initial={{
        bottom: "-150px",
      }}
      transition={{ duration: 0.25, delay: show ? 0.25 : 0 }}
    >
      <Cover
        width={72}
        height={72}
        alt="cover"
        src={playingItem?.coverImage}
        radius="none"
        onClick={maximizePlayer}
      />

      <Details>
        <Title>{playingItem?.title}</Title>
        <Episode>Episode 13</Episode>
        <Elapsed>03:34 / 34:56</Elapsed>
      </Details>

      <ButtonsGroup>
        <RoundButton variant="light">
          <IconPlayerPause size={20} />
        </RoundButton>

        <RoundButton variant="light" onClick={closePlayer}>
          <IconX size={20} />
        </RoundButton>
      </ButtonsGroup>
    </$>
  );
}

const $ = styled(motion.div)`
  width: 370px;
  height: 90px;
  padding: 8px;
  border-radius: 4px;

  background-color: var(--light-background);
  opacity: 0.75;

  position: fixed;
  right: 26px;

  display: flex;
`;

const Cover = styled(Image)`
  &:hover {
    cursor: pointer;
  }
`;

const Details = styled.div`
  margin-left: 12px;

  font-size: 14px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 16px;
  line-height: 21px;
  font-weight: bold;
`;
const Episode = styled.div`
  line-height: 14px;
`;
const Elapsed = styled.div`
  margin-top: 10px;
  font-weight: 700;
`;

const ButtonsGroup = styled.div`
  margin: auto 0 auto auto;

  display: flex;
  gap: 6px;
`;
