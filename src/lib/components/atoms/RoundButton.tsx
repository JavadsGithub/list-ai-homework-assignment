"use client";

import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

interface RoundButtonProps extends ButtonHTMLAttributes<"button"> {
  variant: "light" | "dark";
}

export function RoundButton({ variant, children, ...rest }: RoundButtonProps) {
  return (
    <$ variant={variant} {...(rest as any)}>
      {children}
    </$>
  );
}

const $ = styled.button<{ variant: "light" | "dark" }>`
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
    background-color: ${(props) =>
      `var(--round-button-${props.variant}-background-hover)`};
    cursor: pointer;
  }
`;
