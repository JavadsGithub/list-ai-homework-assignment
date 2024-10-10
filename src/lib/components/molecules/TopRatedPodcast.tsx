"use client";

import {
  Item,
  setPlayingItem as setPlayingItemAction,
  useAppDispatch,
} from "$/lib/redux";
import { Image, Spacer } from "@nextui-org/react";
import { IconChevronRight } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useCallback } from "react";
import styled from "styled-components";

interface TopRatedPodcastProps {
  item: Item;
}

export function TopRatedPodcast({ item }: TopRatedPodcastProps) {
  const dispatch = useAppDispatch();

  const setPlayingItem = useCallback(() => {
    dispatch(setPlayingItemAction({ item }));
  }, []);

  return (
    <$
      whileHover={{
        background:
          "linear-gradient(90deg, rgba(42,117,152,1) 0%, rgba(39,73,89,1) 0%, rgba(37,37,38,1) 100%)",
      }}
      initial={{
        background:
          "linear-gradient(90deg, rgba(42,117,152,1) 0%, rgba(41,108,139,1) 0%, rgba(37,37,38,1) 100%)",
      }}
      onClick={setPlayingItem}
    >
      <Cover
        // width={82}
        height={82}
        alt="cover"
        src={item?.coverImage}
        radius="sm"
      />

      <Details>
        <Title>{item?.title}</Title>
        <Episode>Episode 13</Episode>
        <Spacer y={1} />
        <Description>{item?.description}</Description>
      </Details>

      <ChevronButton>
        <IconChevronRight size={20} />
      </ChevronButton>
    </$>
  );
}

const $ = styled(motion.div)`
  min-height: 118px;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    cursor: pointer;
  }
`;

const Cover = styled(Image)`
  min-width: 82px;
  margin-left: 16px;

  &:hover {
    cursor: pointer;
  }
`;

const Details = styled.div`
  width: 100%;
  height: 85px;
  margin-left: 16px;

  font-size: 14px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Title = styled.div`
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
`;
const Episode = styled.div`
  font-size: 12px;
  line-height: 14px;
  opacity: 0.6;
`;
const Description = styled.div`
  font-size: 10px;
  opacity: 0.6;
`;

const ChevronButton = styled.button`
  width: 54px;
  height: 100%;

  opacity: 0.6;

  display: flex;
  justify-content: center;
  align-items: center;
`;
