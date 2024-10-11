"use client";

import { usePlayer } from "$/lib/hooks";
import { Item } from "$/lib/redux";
import { Image, Spacer } from "@nextui-org/react";
import { IconChevronRight } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useMemo } from "react";
import styled from "styled-components";

interface TopRatedPodcastProps {
  item: Item;
}

export function TopRatedPodcast({ item }: TopRatedPodcastProps) {
  const animation = useMemo(
    () => ({
      whileHover: {
        background:
          "linear-gradient(90deg, rgba(42,117,152,1) 0%, rgba(39,73,89,1) 0%, rgba(37,37,38,1) 100%)",
      },
      initial: {
        background:
          "linear-gradient(90deg, rgba(42,117,152,1) 0%, rgba(41,108,139,1) 0%, rgba(37,37,38,1) 100%)",
      },
    }),
    []
  );

  const { playItem } = usePlayer();

  return (
    <$
      whileHover={animation.whileHover}
      initial={animation.initial}
      onClick={() => playItem(item)}
    >
      <Cover
        width={82}
        height={82}
        src={item?.coverImage}
        alt="cover"
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
  padding-left: 16px;
  border-radius: 4px;

  position: relative;

  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

const Cover = styled(Image)`
  width: 82px;

  &:hover {
    cursor: pointer;
  }
`;

const Details = styled.div`
  max-width: 70%;
  height: 85px;
  margin-left: 16px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  font-size: 14px;
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
