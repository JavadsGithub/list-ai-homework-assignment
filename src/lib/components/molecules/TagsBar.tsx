"use client";

import { Tag } from "$/lib/components";
import { useQueryParams } from "$/lib/hooks";
import { useSearchParams } from "next/navigation";
import React, { useCallback } from "react";
import styled from "styled-components";

export interface ITag {
  id: number;
  children?: React.ReactNode;
  /**
   * for use as search param key
   */
  queryName: string;
  /**
   * for use as search param value
   */
  queryValue: string;
}

interface TagsBarProps {
  tags: ITag[];
}

export function TagsBar({ tags }: TagsBarProps) {
  const searchParams = useSearchParams();
  const { pushQueryString } = useQueryParams();

  const isActive = useCallback(
    (queryName: string, queryValue: string) => {
      const query = searchParams.get(queryName);
      return !!query && query === queryValue;
    },
    [searchParams]
  );

  return (
    <$>
      {tags?.map(($tag) => (
        <Tag
          key={$tag.id}
          tag={$tag}
          onClick={pushQueryString}
          isActive={isActive}
        />
      ))}
    </$>
  );
}

const $ = styled.div`
  padding: 0 24px 0 24px;

  display: flex;
  gap: 6px;
  flex-wrap: wrap;
`;
