"use client";

import { Progress } from "$/lib/components";
import { Item } from "$/lib/redux";
import { Image, Spacer } from "@nextui-org/react";
import { IconArrowRight } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Link from "next/link";
import styled from "styled-components";

interface InProgressCardProps {
  item: Item;
}

export function InProgressCard({ item }: InProgressCardProps) {
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
    >
      <Group>
        <Cover
          width={82}
          height={82}
          alt="cover"
          src={item?.coverImage}
          radius="sm"
        />

        <Details>
          <Title>{item?.title}</Title>
          <Author>{item?.author}</Author>
          <Spacer y={1} />
          <Progress
            progress={item?.progress}
            styles={`
            font-weight: bold;
            font-size: 14px;
          `}
          />
        </Details>
      </Group>

      <Link href="/books/1">
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

  font-size: 14px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
`;

const Author = styled.div`
  font-size: 12px;
  line-height: 14px;
  opacity: 0.6;
`;

const Button = styled.button`
  width: 160px;
  opacity: 0.7;
  height: 48px;
  padding: 0 22px 0 22px;
  border-radius: 24px;

  font-weight: bold;

  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: var(--round-button-light-background);

  transition-duration: 200ms;

  &:hover {
    background-color: var(--round-button-light-background-hover);
    opacity: 1;
  }
`;
