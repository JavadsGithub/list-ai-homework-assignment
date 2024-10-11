"use client";

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
        <span>{title}</span>
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
  opacity: 0.4;

  font-size: bold;
`;
