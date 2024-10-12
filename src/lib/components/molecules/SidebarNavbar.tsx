"use client";

import { NavbarLinks, UserDetails } from "$/lib/components";
import styled from "styled-components";

export function SidebarNavbar() {
  return (
    <$>
      <UserDetails />
      <NavbarLinks />
    </$>
  );
}

const $ = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--card-background);
`;
