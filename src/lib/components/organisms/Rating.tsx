"use client";

import { IconStarFilled } from "@tabler/icons-react";
import styled from "styled-components";

export function Rating() {
  return (
    <$>
      <Stars>
        <IconStarFilled size={16} />
        <IconStarFilled size={16} />
        <IconStarFilled size={16} />
        <IconStarFilled size={16} />
        <IconStarFilled size={16} />
      </Stars>
      <span>4.5 - 229 rating</span>
    </$>
  );
}

const $ = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;

  display: flex;
  align-items: center;
  gap: 8px;

  font-weight: bold;
  color: var(--brand);
`;

const Stars = styled.div`
  display: flex;
  gap: 4px;
`;
