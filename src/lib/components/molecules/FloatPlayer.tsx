"use client";

import { usePlayer } from "$/lib/hooks";
import { useAppSelector } from "$/lib/redux";
import { Image } from "@nextui-org/react";
import { IconPlayerPause, IconX } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useMemo } from "react";
import styled from "styled-components";
import { RoundButton } from "../atoms";

const frames = {
  bottom: {
    idle: "-150px",
    appear: ["-150px", "40px", "26px"],
    disappear: "-150px",
  },
};

export function FloatPlayer() {
  const { playMode, playingItem } = useAppSelector((state) => ({
    playMode: state.layout.playMode,
    playingItem: state.layout.playingItem,
  }));

  const isAppearing = useMemo(() => playMode == "float", [playMode]);

  const { maximizePlayer, closePlayer } = usePlayer();

  // >>>------------ Animation Props
  const animation = useMemo(
    () => ({
      bottom:
        playMode == null
          ? frames.bottom.idle
          : playMode == "float"
          ? frames.bottom.appear
          : frames.bottom.disappear,
    }),
    [playMode]
  );

  const initial = useMemo(
    () => ({
      bottom: "-150px",
    }),
    []
  );

  const transition = useMemo(
    () => ({ duration: 0.25, delay: isAppearing ? 0.25 : 0 }),
    [isAppearing]
  );
  // Animation Props ------------<<<

  return (
    <$ animate={animation} initial={initial} transition={transition}>
      <Cover
        onClick={maximizePlayer}
        width={72}
        height={72}
        src={playingItem?.coverImage}
        alt="cover"
        radius="none"
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
  opacity: 0.9;

  width: 370px;
  height: 90px;
  padding: 8px;
  border-radius: 4px;

  position: fixed;
  right: 26px;
  z-index: 999;

  display: flex;

  background-color: var(--light-background);
`;

const Cover = styled(Image)`
  &:hover {
    cursor: pointer;
  }
`;

const Details = styled.div`
  margin-left: 12px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  font-size: 14px;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
  line-height: 21px;
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
