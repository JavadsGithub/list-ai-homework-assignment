"use client";

import { Item } from "$/lib/redux";
import { Image, Spacer } from "@nextui-org/react";
import { useMemo } from "react";
import styled, { css } from "styled-components";

interface CarouselItemProps {
  item: Item;
  // use external reference for performance optimization
  playItem: (item: Item) => void;
  showProgress?: boolean;
}

export function CarouselItem({
  item,
  playItem,
  showProgress,
}: CarouselItemProps) {
  // mocking saved items for showing dot badge
  const isSaved = useMemo(() => Math.random() > 0.5, []);

  return (
    <$ key={item.id} onClick={() => playItem(item)}>
      {/* used String() for avoiding short-circuit pattern's undefined behavior */}
      <DotMark className={String(!isSaved && "hidden")} />

      <ItemCover
        src={item.coverImage}
        width={120}
        height={120}
        radius="sm"
        alt="cover"
      />

      <Spacer y={2} />

      <Details>
        {/* "compactMode" is corresponding to "showProgress" */}
        <ItemTitle compactMode={showProgress}>{item.title}</ItemTitle>

        <ItemAuthor>{item.author}</ItemAuthor>

        {showProgress && <Progress>{item.progress}% finished</Progress>}
      </Details>
    </$>
  );
}

const $ = styled.div`
  width: 120px;
  height: 200px;

  position: relative;

  flex-shrink: 0;

  transition-duration: 200ms;

  &:hover {
    opacity: 0.5;

    cursor: pointer;
  }
`;

const ItemTitle = styled.div<{ compactMode?: boolean }>`
  font-size: 14px;
  font-weight: bold;

  ${(props) =>
    props.compactMode &&
    css`
      overflow: hidden;

      white-space: nowrap;
      text-overflow: ellipsis;
    `}
`;

const ItemAuthor = styled.div`
  opacity: 0.5;

  font-size: 12px;
`;

const Progress = styled.div`
  font-size: 12px;
  color: var(--brand);
`;

const ItemCover = styled(Image)`
  pointer-events: none;

  cursor: pointer;

  background-color: var(--light-background);
  object-fit: cover;
`;

const Details = styled.div`
  width: 100%;
  padding: 0 4px 0 4px;

  display: flex;
  flex-direction: column;
`;

const DotMark = styled.span`
  width: 14px;
  height: 14px;
  border-radius: 50%;

  position: absolute;
  top: -4px;
  right: -4px;
  z-index: 100;

  background-color: var(--brand-light);
`;
