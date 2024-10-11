"use client";

import { RoundButton, TagsBar } from "$/lib/components";
import { TAGS } from "$/lib/constants";
import { Input, Spacer } from "@nextui-org/react";
import {
  IconArrowLeft,
  IconBookmark,
  IconMessage,
  IconSearch,
} from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import React, { Suspense, useCallback } from "react";
import styled from "styled-components";

interface PageHeaderProps {
  title: React.ReactNode;
  //**
  /* Compact mode for pages like "/books/:id"
   */
  compact?: boolean;
}

export function PageHeader({ title, compact }: PageHeaderProps) {
  const router = useRouter();

  const goBack = useCallback(() => router.back(), [router]);

  if (compact) {
    return (
      <$>
        <HeaderRow>
          <Group>
            <RoundButton variant="light" onClick={goBack}>
              <IconArrowLeft size={20} />
            </RoundButton>

            <Spacer x={1} />

            <Title>{title}</Title>
          </Group>

          <Group>
            <RoundButton variant="light">
              <IconBookmark size={18} />
            </RoundButton>

            <RoundButton variant="light">
              <IconMessage size={18} />
            </RoundButton>

            <Suspense>
              <TagsBar tags={TAGS.compact} />
            </Suspense>
          </Group>
        </HeaderRow>
      </$>
    );
  } else {
    return (
      <$>
        <HeaderRow>
          <Title>{title}</Title>

          <Suspense>
            <TagsBar tags={TAGS.profile} />
          </Suspense>
        </HeaderRow>

        <HeaderRow>
          <Suspense>
            <TagsBar tags={TAGS.categories} />
          </Suspense>

          <SearchInput
            placeholder="What do you want to learn today?"
            startContent={<IconSearch size={20} />}
            classNames={{
              inputWrapper: "bg-default h-10",
            }}
          />
        </HeaderRow>
      </$>
    );
  }
}

const $ = styled.div`
  height: 128px;
  padding: 12px 24px 20px 24px;

  position: sticky;
  top: 0;
  left: 0;
  z-index: 999;

  display: flex;
  flex-direction: column;
  gap: 8px;

  background-color: var(--card-background);
`;

const HeaderRow = styled.div`
  width: 100%;
  height: 50%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const SearchInput = styled(Input).attrs({
  radius: "sm",
})`
  width: 320px;
`;

const Group = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
