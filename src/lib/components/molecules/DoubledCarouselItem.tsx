"use client";

import { Item } from "$/lib/redux";
import { Image } from "@nextui-org/react";
import { IconChevronRight } from "@tabler/icons-react";
import styled from "styled-components";

interface DoubledCarouselItemProps {
  item: Item;
  playItem: (item: Item) => void;
}

export function DoubledCarouselItem({
  item,
  playItem,
}: DoubledCarouselItemProps) {
  return (
    <$ onClick={() => playItem(item)}>
      <Cover
        width={80}
        height={80}
        src={item.coverImage}
        alt={`${item.title} cover`}
        radius="sm"
      />

      <Details>
        <DetailsGroup>
          <Title>{item.title}</Title>

          <Author>{item.description}</Author>
        </DetailsGroup>

        <Category color="default">Productivity 💡</Category>

        <ChevronButton>
          <IconChevronRight />
        </ChevronButton>
      </Details>
    </$>
  );
}

const $ = styled.div`
  width: 400px;
  height: 112px;
  padding-left: 12px;
  border-radius: 8px;

  position: relative;

  display: flex;
  align-items: center;
  gap: 10px;

  background-color: var(--light-background);

  transition-duration: 400ms;

  &:hover {
    cursor: pointer;

    background-color: var(--round-button-light-background-hover);
  }
`;

const Details = styled.div`
  height: 80px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
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
const Author = styled.div`
  opacity: 0.5;

  max-width: 230px;

  overflow: hidden;

  font-size: 12px;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Cover = styled(Image)`
  width: 80px;

  object-fit: cover;
`;

const DetailsGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Category = styled.div`
  min-height: 32px;
  padding: 0 12px 0 12px;
  border-radius: 18px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 16px;

  background-color: var(--round-button-light-background-hover);
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
