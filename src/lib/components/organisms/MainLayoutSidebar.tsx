"use client";

import styled from "styled-components";
import { SidebarNavbar, SidebarSavedItems } from "$/lib/components";

export function MainLayoutSidebar() {
  return (
    <$>
      <SidebarNavbar />
      <SidebarSavedItems />
    </$>
  );
}

const $ = styled.div`
  min-width: 280px;

  display: flex;
  flex-direction: column;
  gap: 6px;
`;
