"use client";

import { SavedItemsList, TagsBar } from "$/lib/components";
import { TAGS } from "$/lib/constants";
import { IconBookmark } from "@tabler/icons-react";
import { Suspense } from "react";
import styled from "styled-components";

export function SidebarSavedItems() {
  return (
    <$>
      <Header>
        <IconBookmark size={22} opacity={0.6} />

        <Title>Saved Items</Title>
      </Header>

      <Suspense>
        <div className="px-5">
          <TagsBar tags={TAGS.savedItems} />
        </div>
      </Suspense>

      <SavedItemsList />
    </$>
  );
}

const $ = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 16px;

  background-color: var(--card-background);
`;

const Header = styled.div`
  width: 100%;
  height: 32px;
  padding: 24px;

  display: flex;
  gap: 8px;
`;

const Title = styled.h3`
  font-weight: 700;
`;
