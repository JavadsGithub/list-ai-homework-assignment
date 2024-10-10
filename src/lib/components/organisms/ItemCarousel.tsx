"use client";

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
import { CarouselItem } from "../atoms";

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
  const dispatch = useAppDispatch();
  const shrinkMode = useAppSelector(
    (state) => state.layout.playMode == "drawer"
  );
  // We will use React useRef hook to reference the wrapping div:
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  // Now we pass the reference to the useDraggable hook:
  const { events } = useDraggable(ref);

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
          <CarouselItem
            key={$book.id}
            book={$book}
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
