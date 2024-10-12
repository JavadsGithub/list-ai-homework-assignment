"use client";

import { BookSpec } from "$/lib/components";
import { Divider } from "@nextui-org/react";
import { IconBook, IconFileCheck, IconHeadphones } from "@tabler/icons-react";
import styled from "styled-components";

export function SingleBookSpecifications() {
  return (
    <$>
      <BookSpec
        icon={<IconBook />}
        title="list"
        value="73"
        description="List Points"
      />

      <Divider orientation="vertical" />

      <BookSpec
        icon={<IconHeadphones />}
        title="listen"
        value="12"
        description="Chapters"
      />

      <Divider orientation="vertical" />

      <BookSpec
        icon={<IconFileCheck />}
        title="exam"
        value="15"
        description="Topics"
      />
    </$>
  );
}

const $ = styled.div`
  width: 112px;
  height: 104px;

  display: flex;
  align-items: center;
  gap: 16px;

  font-size: 14px;
  line-height: 20px;
`;
