"use client";

import { CarouselItem } from "$/lib/components";
import { useDragScroll, usePlayer } from "$/lib/hooks";
import { Item, useAppSelector } from "$/lib/redux";
import { motion } from "framer-motion";
import React, { useMemo } from "react";
import styled from "styled-components";

interface ItemCarouselProps {
  title: React.ReactNode;
  items: Item[];
  showProgress?: boolean;
}

export function ItemCarousel({
  items,
  title,
  showProgress,
}: ItemCarouselProps) {
  // carousel must shrink for player to be displayed properly
  const shrinkMode = useAppSelector(
    (state) => state.layout.playMode == "drawer"
  );

  const animation = useMemo(
    () => ({
      animate: { width: shrinkMode ? "calc(100vw - 646px)" : "100%" },
      initial: { width: "100%" },
      transition: { duration: 0.15, delay: 0.15 },
    }),
    [shrinkMode]
  );

  const { playItem } = usePlayer();
  const { events, ref } = useDragScroll();

  return (
    <$
      animate={animation.animate}
      initial={animation.initial}
      transition={animation.transition}
    >
      <Title>{title}</Title>

      <Carousel ref={ref} {...events}>
        {items.map(($item) => (
          <CarouselItem
            key={$item.id}
            item={$item}
            playItem={playItem}
            showProgress={showProgress}
          />
        ))}
      </Carousel>
    </$>
  );
}

const $ = styled(motion.div)`
  width: 100%;
  height: 264px;
`;

const Title = styled.h3`
  padding-left: 24px;
  margin-bottom: 12px;

  font-size: 24px;
  font-weight: bold;
`;

const Carousel = styled.div`
  max-width: 100%;
  min-height: 240px;
  padding-top: 4px;
  padding-left: 24px;
  padding-right: 24px;

  overflow-x: hidden;

  display: flex;
  gap: 16px;
`;
