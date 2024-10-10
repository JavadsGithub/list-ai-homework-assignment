"use client";

import {
  PlayerHud,
  PlayerItemDetails,
  SidePlayerHeader,
  TracksList,
} from "$/lib/components";
import { PlayMode, useAppSelector } from "$/lib/redux";
import { Spacer } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useMemo } from "react";
import styled from "styled-components";

export function SidePlayer() {
  const { playMode, playingItem } = useAppSelector((state) => ({
    playMode: state.layout.playMode,
    playingItem: state.layout.playingItem,
  }));

  const isAppearing = useMemo(() => playMode == "drawer", [playMode]);

  return (
    <motion.div
      animate={{
        opacity: isAppearing ? 1 : 0,
        visibility: isAppearing ? "visible" : "hidden",
      }}
      transition={{
        delay: isAppearing ? 0.15 : 0,
        duration: isAppearing ? 0.15 : 0,
      }}
      initial={{ opacity: 0, visibility: "hidden" }}
    >
      <$ playMode={playMode}>
        <Blur bg={playingItem?.coverImage} />

        <Body className="hide-scrollbar">
          <SidePlayerHeader />

          <PlayerItemDetails />

          <PlayerHud />

          <Spacer y={8} />

          <TracksList />
        </Body>
      </$>
    </motion.div>
  );
}

const $ = styled.div<{ playMode: PlayMode }>`
  width: 360px;
  height: 100vh;

  position: absolute;
  top: 0;
  right: 0;

  overflow-x: hidden;
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.6);
`;

const Blur = styled(Content)<{ bg?: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  filter: blur(14px);
  -webkit-filter: blur(14px);

  background-image: ${(props) => props.bg && `url(${props.bg})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const Body = styled(Content)`
  z-index: 2;

  overflow: scroll;
`;
