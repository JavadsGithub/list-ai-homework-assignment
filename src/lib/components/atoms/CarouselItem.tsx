"use client";

import { Item } from "$/lib/redux";
import { Image, Spacer } from "@nextui-org/react";
import { useMemo } from "react";
import styled from "styled-components";

interface ForYouItemProps {
  book: Item;
  playItem: (item: Item) => void;
  showProgress?: boolean;
}

export function CarouselItem({
  book,
  playItem,
  showProgress,
}: ForYouItemProps) {
  const badged = useMemo(() => Math.random() > 0.5, []);

  return (
    <$ key={book.id} onClick={() => playItem(book)}>
      <DotMark className={String(!badged && "hidden")} />
      <ItemCover
        src={book.coverImage}
        alt="cover"
        width={120}
        height={120}
        radius="sm"
      />
      <Spacer y={2} />
      <Details>
        <ItemTitle>{book.title}</ItemTitle>
        <ItemAuthor>{book.author}</ItemAuthor>
        {showProgress && <Progress>{book.progress}% finished</Progress>}
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

const ItemTitle = styled.div`
  font-size: 14px;
  font-weight: bold;
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
