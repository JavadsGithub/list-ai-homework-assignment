"use client";

import { ProgressDescription } from "$/lib/components";
import { Item } from "$/lib/redux";
import { Image, Spacer } from "@nextui-org/react";
import { IconArrowRight } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useMemo } from "react";
import styled from "styled-components";

interface InProgressCardProps {
  item: Item;
}

export function InProgressCard({ item }: InProgressCardProps) {
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

  return (
    <$ whileHover={animation.whileHover} initial={animation.initial}>
      <Group>
        <Cover
          width={82}
          height={82}
          src={item?.coverImage}
          alt="cover"
          radius="sm"
        />

        <Details>
          <Title>{item?.title}</Title>

          <Author>{item?.author}</Author>

          <Spacer y={1} />

          <ProgressDescription progress={item?.progress} />
        </Details>
      </Group>

      <Link href={`/books/${item.id}`}>
        <Button>
          <span>Continue</span>

          <IconArrowRight size={20} />
        </Button>
      </Link>
    </$>
  );
}

const $ = styled(motion.div)`
  max-width: 600px;
  height: 110px;
  padding-left: 16px;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  &:hover {
    cursor: pointer;
  }
`;

const Cover = styled(Image)`
  min-width: 82px;

  &:hover {
    cursor: pointer;
  }
`;

const Group = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Details = styled.div`
  height: 85px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  font-size: 14px;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;
`;

const Author = styled.div`
  opacity: 0.6;

  font-size: 12px;
  line-height: 14px;
`;

const Button = styled.button`
  opacity: 0.7;

  width: 160px;
  height: 48px;
  padding: 0 22px 0 22px;
  border-radius: 24px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  font-weight: bold;

  background-color: var(--round-button-light-background);

  transition-duration: 200ms;

  &:hover {
    opacity: 1;

    background-color: var(--round-button-light-background-hover);
  }
`;
