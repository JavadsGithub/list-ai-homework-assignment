"use client";

import styled from "styled-components";
import { TagsBar } from "../molecules";
import { PODCASTS_PAGE_HEADER_TAGS } from "$/lib/config";
import { Input } from "@nextui-org/react";
import { IconSearch } from "@tabler/icons-react";
import { Suspense } from "react";

export function PodcastsPageHeader() {
  return (
    <$>
      <HeaderRow>
        <Title>Podcast</Title>

        <Suspense>
          <TagsBar tags={PODCASTS_PAGE_HEADER_TAGS.profile} />
        </Suspense>
      </HeaderRow>

      <HeaderRow>
        <Suspense>
          <TagsBar tags={PODCASTS_PAGE_HEADER_TAGS.categories} />
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

const $ = styled.div`
  height: 112px;
  padding-top: 18px;
  padding-right: 24px;
  padding-left: 24px;

  position: sticky;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  gap: 8px;
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
