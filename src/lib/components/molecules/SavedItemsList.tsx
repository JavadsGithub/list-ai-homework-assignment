"use client";

import { selectSavedItems, useAppSelector } from "$/lib/redux";
import styled from "styled-components";
import { SavedItem } from "$/lib/components";

export function SavedItemsList() {
  const savedItems = useAppSelector(selectSavedItems);

  return (
    <$>
      {savedItems?.map(($savedItem) => (
        <SavedItem key={$savedItem.id} item={$savedItem} />
      ))}
    </$>
  );
}

const $ = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;
