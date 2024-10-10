"use client";

import { MainLayoutSidebar } from "$/lib/components";
import React from "react";
import styled from "styled-components";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <$>
      <MainLayoutSidebar />
      <Content>{children}</Content>
    </$>
  );
}

const $ = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  display: flex;
  gap: 6px;
`;

const Content = styled.div`
  width: 100%;
  background-color: var(--card-background);
`;
