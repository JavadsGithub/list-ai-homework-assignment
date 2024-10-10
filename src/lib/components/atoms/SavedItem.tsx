"use client";

import {
  Item,
  setPlayingItem as setPlayingItemAction,
  useAppDispatch,
} from "$/lib/redux";
import styled from "styled-components";
import { Image } from "@nextui-org/react";
import { useCallback } from "react";

interface SavedItemProps {
  item: Item;
}

export function SavedItem({ item }: SavedItemProps) {
  const dispatch = useAppDispatch();

  const setPlayingItem = useCallback(() => {
    dispatch(setPlayingItemAction({ item }));
  }, []);

  return (
    <$ onClick={setPlayingItem}>
      <Image
        width={60}
        height={60}
        src={item.coverImage}
        radius="none"
        alt={`${item.title} cover`}
      />

      <Details>
        <Title>{item.title}</Title>
        <Author>{item.author}</Author>
      </Details>
    </$>
  );
}

const $ = styled.div`
  width: 100%;
  height: 80px;
  padding: 8px 12px 8px 12px;

  display: flex;
  align-items: center;
  gap: 10px;

  transition-duration: 400ms;

  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
  }
`;

const Details = styled.div`
  height: 54px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;

  &:hover {
    cursor: pointer;
  }
`;

const Title = styled.p`
  line-height: 14px;
  font-size: 14px;
  font-weight: bold;
`;
const Author = styled.p`
  text-overflow: ellipsis;
  font-size: 12px;

  opacity: 0.5;
`;
