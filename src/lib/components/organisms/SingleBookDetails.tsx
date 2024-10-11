"use client";

import { Item, setPlayingItem, useAppDispatch } from "$/lib/redux";
import { Image, Spacer, useCalendar } from "@nextui-org/react";
import { IconBook, IconHeadphones } from "@tabler/icons-react";
import { useCallback } from "react";
import styled from "styled-components";

interface SingleBookDetailsProps {
  book?: Item;
}

export function SingleBookDetails({ book }: SingleBookDetailsProps) {
  const dispatch = useAppDispatch();
  const playItem = useCallback(() => {
    if (book) dispatch(setPlayingItem({ item: book }));
  }, [dispatch, setPlayingItem, book]);

  return (
    <$>
      <Group>
        <Image width={160} height={160} src={book?.coverImage} radius="sm" />

        <Details>
          <Title>{book?.title}</Title>
          <Author>{book?.author}</Author>
        </Details>
      </Group>

      <Group>
        <Button onClick={playItem}>
          <IconHeadphones />
          <span>Listen</span>
        </Button>

        <Spacer x={3} />

        <Button onClick={playItem}>
          <IconBook />
          <span>Lists</span>
        </Button>
      </Group>
    </$>
  );
}

const $ = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Group = styled.div`
  display: flex;
  align-items: center;
`;

const Details = styled.div`
  margin-left: 16px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
`;
const Author = styled.div`
  font-size: 20px;
  opacity: 0.6;
`;

const Button = styled.button`
  height: 48px;
  padding: 0 22px 0 22px;
  border-radius: 24px;
  font-weight: bold;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  background-color: var(--round-button-light-background);

  transition-duration: 200ms;

  &:hover {
    background-color: var(--round-button-light-background-hover);
  }
`;
