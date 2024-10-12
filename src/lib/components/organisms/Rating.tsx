"use client";

import { Stars } from "$/lib/components";
import styled from "styled-components";

export function Rating() {
  return (
    <$>
      <Stars />
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
