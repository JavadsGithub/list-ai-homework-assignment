"use client";

import React from "react";
import styled from "styled-components";

interface TitledParagraphProps {
  title: React.ReactNode;
  children: React.ReactNode;
}

export function TitledParagraph({ children, title }: TitledParagraphProps) {
  return (
    <$>
      <Title>{title}</Title>
      <Paragraph>{children}</Paragraph>
    </$>
  );
}

const $ = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Title = styled.h4`
  font-size: 24px;
  font-weight: bold;
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 30px;
  
  opacity: 0.9;
`;
