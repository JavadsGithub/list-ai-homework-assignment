"use client";

import { IconBook } from "@tabler/icons-react";
import React from "react";
import styled from "styled-components";

interface BookSpecProps {
  icon: React.ReactNode;
  title: React.ReactNode;
  value: React.ReactNode;
  description: React.ReactNode;
}

export function BookSpec({ description, icon, title, value }: BookSpecProps) {
  return (
    <$>
      <Title>
        {icon}
        {title}
      </Title>

      <Point>{value}</Point>

      <Category>{description}</Category>
    </$>
  );
}

const $ = styled.div`
  width: 80px;
  height: 105px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
`;

const Title = styled.div`
  display: flex;
  gap: 4px;

  font-weight: bold;
`;

const Point = styled.h3`
  font-size: 36px;
  font-weight: bold;
`;

const Category = styled.div`
  font-size: bold;
  opacity: 0.4;
`;
