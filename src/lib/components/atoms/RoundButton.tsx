"use client";

import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

export type RoundButtonVariant = "light" | "dark";

interface RoundButtonProps extends ButtonHTMLAttributes<"button"> {
  variant: RoundButtonVariant;
}

export function RoundButton({ variant, children, ...rest }: RoundButtonProps) {
  return (
    <$ variant={variant} {...(rest as any)}>
      {children}
    </$>
  );
}

const $ = styled.button<{ variant: RoundButtonVariant }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) =>
    `var(--round-button-${props.variant}-background)`};

  transition-duration: 200ms;

  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      `var(--round-button-${props.variant}-background-hover)`};
  }
`;
