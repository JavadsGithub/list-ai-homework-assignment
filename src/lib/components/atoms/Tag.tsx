"use client";

import { ITag } from "$/lib/components";
import { Chip } from "@nextui-org/react";
import styled from "styled-components";

interface TagProps {
  tag: ITag;
  isActive: (queryName: string, queryValue: string) => boolean;
  onClick: (name: string, value: string) => void;
}

export function Tag({ tag, isActive, onClick }: TagProps) {
  return (
    <$
      key={tag.id}
      color={isActive(tag.queryName, tag.queryValue) ? "primary" : "default"}
      onClick={() => onClick(tag.queryName, tag.queryValue)}
    >
      {tag.children}
    </$>
  );
}

const $ = styled(Chip)`
  opacity: 0.75;
  transition-duration: 200ms;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;
