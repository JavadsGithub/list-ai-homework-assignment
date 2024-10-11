"use client";

import {
  PlayerHud,
  PlayerItemDetails,
  SidePlayerHeader,
  TracksList,
} from "$/lib/components";
import { usePlayer } from "$/lib/hooks";
import { PlayMode } from "$/lib/redux";
import { Spacer } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useMemo } from "react";
import styled from "styled-components";

export function SidePlayer() {
  const { playMode, playingItem } = usePlayer();

  const isAppearing = useMemo(() => playMode == "drawer", [playMode]);

  const animation = useMemo(
    () => ({
      animate: {
        opacity: isAppearing ? 1 : 0,
        visibility: isAppearing ? "visible" : "hidden",
      },
      initial: { opacity: 0, visibility: "hidden" },
      transition: {
        delay: isAppearing ? 0.15 : 0,
        duration: isAppearing ? 0.15 : 0,
      },
    }),
    [isAppearing]
  );

  return (
    <$
      animate={animation.animate as any}
      transition={animation.transition}
      initial={animation.initial as any}
      playMode={playMode}
    >
      <Blur bg={playingItem?.coverImage} />

      <Body className="hide-scrollbar">
        <SidePlayerHeader />

        <PlayerItemDetails />

        <PlayerHud />

        <Spacer y={8} />

        <TracksList />
      </Body>
    </$>
  );
}

const $ = styled(motion.div)<{ playMode: PlayMode }>`
  width: 360px;
  height: 100vh;

  overflow-x: hidden;

  position: absolute;
  top: 0;
  right: 0;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.6);
`;

const Blur = styled(Content)<{ bg?: string }>`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  filter: blur(14px);
  -webkit-filter: blur(14px);

  background-image: ${(props) => props.bg && `url(${props.bg})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const Body = styled(Content)`
  overflow: scroll;

  z-index: 2;
`;
