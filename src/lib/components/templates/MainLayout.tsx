"use client";

import {
  FloatPlayer,
  MainLayoutSidebar,
  SidePlayer,
  SidePlayerPlaceholder,
} from "$/lib/components";
import { Spacer } from "@nextui-org/react";
import React from "react";
import styled from "styled-components";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <$>
      <MainLayoutSidebar />

      <Spacer x={1} />

      <Content>{children}</Content>

      <SidePlayerPlaceholder />

      <SidePlayer />

      <FloatPlayer />
    </$>
  );
}

const $ = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  display: flex;
`;

const Content = styled.div.attrs({
  className: "hide-scrollbar",
})`
  width: 100%;
  background-color: var(--card-background);
  overflow-y: scroll;
  overflow-x: hidden;
`;
