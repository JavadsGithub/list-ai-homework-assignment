"use client";

import styled from "styled-components";

interface ProgressProps {
  progress: number;
}

export function ProgressDescription({ progress }: ProgressProps) {
  return <$>{progress}% finished</$>;
}

const $ = styled.div`
  font-size: 12px;
  color: var(--brand);
`;
