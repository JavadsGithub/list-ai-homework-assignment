"use client";

import { DoubledCarouselItem } from "$/lib/components";
import { useDragScroll, usePlayer } from "$/lib/hooks";
import { Item, useAppSelector } from "$/lib/redux";
import { motion } from "framer-motion";
import React, { useMemo } from "react";
import styled from "styled-components";

interface DoubledItemCarouselProps {
  title: React.ReactNode;
  items: Item[];
}

export function DoubledItemCarousel({
  items,
  title,
}: DoubledItemCarouselProps) {
  // carousel must shrink for player to be displayed properly
  const shrinkMode = useAppSelector(
    (state) => state.layout.playMode == "drawer"
  );

  const { playItem } = usePlayer();

  const { ref, events } = useDragScroll();

  const animation = useMemo(
    () => ({
      animate: { width: shrinkMode ? "calc(100vw - 646px)" : "100%" },
      initial: { width: "100%" },
      transition: { duration: 0.15, delay: 0.15 },
    }),
    [shrinkMode]
  );

  return (
    <$
      animate={animation.animate}
      initial={animation.initial}
      transition={animation.transition}
    >
      <Title>{title}</Title>

      <Carousel ref={ref} {...events}>
        {items.map(($book) => (
          <DoubledCarouselItem
            key={$book.id}
            item={$book}
            playItem={(item) => playItem(item)}
          />
        ))}
      </Carousel>
    </$>
  );
}

const $ = styled(motion.div)`
  width: 100%;
  height: 320px;

  overflow-y: hidden;
`;

const Title = styled.h3`
  padding-left: 24px;
  margin-bottom: 12px;

  font-size: 24px;
  font-weight: bold;
`;

const Carousel = styled.div`
  max-width: 100%;
  height: 250px;
  padding-top: 4px;
  padding-right: 24px;
  padding-left: 24px;

  overflow-x: hidden;

  display: grid;
  grid-template-rows: repeat(2, minmax(max-content, auto)) !important;
  grid-template-columns: repeat(auto, minmax(0px, 1fr)) !important;
  grid-auto-flow: column !important;
  gap: 16px;
`;
