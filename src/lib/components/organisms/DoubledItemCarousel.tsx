"use client";

import { DoubledCarouselItem } from "$/lib/components";
import {
  Item,
  setPlayingItem,
  useAppDispatch,
  useAppSelector,
} from "$/lib/redux";
import { motion } from "framer-motion";
import React, { useCallback, useMemo, useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import styled from "styled-components";

interface DoubledItemCarouselProps {
  title: React.ReactNode;
  items: Item[];
  showProgress?: boolean;
}

export function DoubledItemCarousel({
  items,
  title,
  showProgress,
}: DoubledItemCarouselProps) {
  const dispatch = useAppDispatch();
  const shrinkMode = useAppSelector(
    (state) => state.layout.playMode == "drawer"
  );
  // We will use React useRef hook to reference the wrapping div:
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  // Now we pass the reference to the useDraggable hook:
  const { events } = useDraggable(ref, {
    applyRubberBandEffect: true,
  });

  const animation = useMemo(
    () => (shrinkMode ? { width: "calc(100vw - 646px)" } : { width: "100%" }),
    [shrinkMode]
  );

  const playItem = useCallback((item: Item) => {
    dispatch(setPlayingItem({ item }));
  }, []);

  return (
    <$
      animate={animation}
      initial={{ width: "100%" }}
      transition={{ duration: 0.15, delay: 0.15 }}
    >
      <Title>{title}</Title>

      <Carousel ref={ref} {...events}>
        {items.map(($book) => (
          <DoubledCarouselItem
            key={$book.id}
            item={$book}
            // playItem={playItem}
            // showProgress={showProgress}
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
  padding-left: 24px;
  padding-right: 24px;

  overflow-x: hidden;

  display: grid;
  grid-template-rows: repeat(2, minmax(max-content, auto)) !important;
  grid-template-columns: repeat(auto, minmax(0px, 1fr)) !important;
  grid-auto-flow: column !important;
  gap: 16px;
`;
