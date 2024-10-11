"use client";

import {
  Item,
  setPlayingItem as setPlayingItemAction,
  useAppDispatch,
} from "$/lib/redux";
import { Image } from "@nextui-org/react";
import { IconChevronRight } from "@tabler/icons-react";
import { useCallback } from "react";
import styled from "styled-components";

interface DoubledCarouselItemProps {
  item: Item;
}

export function DoubledCarouselItem({ item }: DoubledCarouselItemProps) {
  const dispatch = useAppDispatch();

  const setPlayingItem = useCallback(() => {
    dispatch(setPlayingItemAction({ item }));
  }, []);

  return (
    <$ onClick={setPlayingItem}>
      <Cover
        width={80}
        height={80}
        src={item.coverImage}
        radius="sm"
        alt={`${item.title} cover`}
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

  display: flex;
  align-items: center;
  gap: 10px;

  transition-duration: 400ms;

  background-color: var(--light-background);

  position: relative;

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
  line-height: 14px;
  font-size: 14px;
  font-weight: bold;
`;
const Author = styled.div`
  max-width: 230px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 12px;

  opacity: 0.5;
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

  background-color: var(--round-button-light-background-hover);

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 16px;
`;

const ChevronButton = styled.button`
  width: 54px;
  height: 100%;

  opacity: 0.6;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
`;
