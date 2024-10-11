"use client";

import { PageHeader } from "$/lib/components";
import React from "react";
import styled from "styled-components";

interface PageContainerProps {
  title: React.ReactNode;
  children: React.ReactNode;
  /**
   * will be used for pages like SingleBook
   */
  compact?: boolean;
}

export function PageContainer({ title, children, compact }: PageContainerProps) {
  return (
    <$>
      <PageHeader title={title} compact={compact} />
      {children}
    </$>
  );
}

const $ = styled.div`
  width: 100%;
  max-width: calc(100vw - 280px);
  padding-bottom: 400px;

  display: flex;
  flex-direction: column;

  position: relative;
`;
