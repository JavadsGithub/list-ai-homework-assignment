"use client";

import { usePlayer } from "$/lib/hooks";
import { Item } from "$/lib/redux";
import { Image } from "@nextui-org/react";
import { IconChevronRight } from "@tabler/icons-react";
import styled from "styled-components";

interface SavedItemCardProps {
  item: Item;
}

export function SavedItemCard({ item }: SavedItemCardProps) {
  const { playItem } = usePlayer();

  return (
    <$ onClick={() => playItem(item)}>
      <Image
        width={60}
        height={60}
        src={item.coverImage}
        alt={`${item.title} cover`}
        radius="none"
      />

      <Details>
        <Title>{item.title}</Title>
        <Author>{item.author}</Author>
      </Details>

      <ChevronButton>
        <IconChevronRight size={20} />
      </ChevronButton>
    </$>
  );
}

const $ = styled.div`
  width: 100%;
  height: 80px;
  padding: 8px 12px 8px 12px;

  position: relative;

  display: flex;
  align-items: center;
  gap: 10px;

  transition-duration: 400ms;

  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
  }
`;

const Details = styled.div`
  max-width: 150px;
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
  font-size: 14px;
  font-weight: bold;
  line-height: 14px;
`;
const Author = styled.p`
  opacity: 0.5;

  font-size: 12px;
  text-overflow: ellipsis;
`;

const ChevronButton = styled.button`
  opacity: 0.6;

  width: 54px;
  height: 100%;

  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);

  display: flex;
  justify-content: center;
  align-items: center;
`;
