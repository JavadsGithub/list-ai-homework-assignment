"use client";

import { BookSpec } from "$/lib/components";
import { Item } from "$/lib/redux";
import { Divider } from "@nextui-org/react";
import { IconBook, IconFileCheck, IconHeadphones } from "@tabler/icons-react";
import styled from "styled-components";

interface SingleBookSpecificationsProps {
  book?: Item;
}

export function SingleBookSpecifications() {
  return (
    <$ className="flex h-5 items-center space-x-4 text-small">
      <BookSpec
        description="List Points"
        icon={<IconBook />}
        title="list"
        value="73"
      />
      <Divider orientation="vertical" />

      <BookSpec
        description="Chapters"
        icon={<IconHeadphones />}
        title="listen"
        value="12"
      />
      <Divider orientation="vertical" />

      <BookSpec
        description="Topics"
        icon={<IconFileCheck />}
        title="exam"
        value="15"
      />
    </$>
  );
}

const $ = styled.div`
  width: 112px;
  height: 104px;

  display: flex;
  gap: 16px;
`;
