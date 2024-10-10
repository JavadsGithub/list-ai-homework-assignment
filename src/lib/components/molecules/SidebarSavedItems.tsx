"use client";

import { SavedItemsList, TagsBar } from "$/lib/components";
import { SAVED_ITEMS_TAGS } from "$/lib/config";
import { IconBookmark } from "@tabler/icons-react";
import { Suspense } from "react";
import styled from "styled-components";

export function SidebarSavedItems() {
  return (
    <$>
      <Header>
        <IconBookmark size={22} opacity={0.6} />
        <div className="font-bold">Saved Items</div>
      </Header>

      <Suspense>
        <div className="px-5">
          <TagsBar tags={SAVED_ITEMS_TAGS} />
        </div>
      </Suspense>

      <SavedItemsList />
    </$>
  );
}

const $ = styled.div`
  height: 100%;

  background-color: var(--card-background);

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Header = styled.div`
  width: 100%;
  height: 32px;
  padding: 24px;

  display: flex;
  gap: 8px;
`;
