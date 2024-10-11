"use client";

import { Item } from "$/lib/redux";
import { Image, Spacer } from "@nextui-org/react";
import { useMemo } from "react";
import styled, { css } from "styled-components";

interface CarouselItemProps {
  item: Item;
  playItem: (item: Item) => void;
  showProgress?: boolean;
}

export function CarouselItem({
  item,
  playItem,
  showProgress,
}: CarouselItemProps) {
  const badged = useMemo(() => Math.random() > 0.5, []);

  return (
    <$ key={item.id} onClick={() => playItem(item)}>
      <DotMark className={String(!badged && "hidden")} />
      <ItemCover
        src={item.coverImage}
        alt="cover"
        width={120}
        height={120}
        radius="sm"
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

  flex-shrink: 0;

  position: relative;

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
  font-size: 12px;
  opacity: 0.5;
`;

const Progress = styled.div`
  font-size: 12px;
  color: var(--brand);
`;

const ItemCover = styled(Image)`
  object-fit: cover;
  background-color: var(--light-background);

  pointer-events: none;

  cursor: pointer;
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

  background-color: var(--brand-light);

  position: absolute;
  top: -4px;
  right: -4px;
  z-index: 100;
`;
