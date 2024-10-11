"use client";

import { IconStarFilled } from "@tabler/icons-react";
import styled from "styled-components";

export function Stars() {
  return (
    <$>
      <IconStarFilled size={16} />
      <IconStarFilled size={16} />
      <IconStarFilled size={16} />
      <IconStarFilled size={16} />
      <IconStarFilled size={16} />
    </$>
  );
}

const $ = styled.div`
  display: flex;
  gap: 4px;
`;
