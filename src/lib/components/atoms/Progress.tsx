"use client";

import styled from "styled-components";

interface ProgressProps {
  progress: number;
  styles?: string;
}

export function Progress({ progress, styles }: ProgressProps) {
  return <$ styles={styles}>{progress}% finished</$>;
}

const $ = styled.div<{ styles?: string }>`
  font-size: 12px;
  color: var(--brand);
  ${(props) => props.styles}
`;
