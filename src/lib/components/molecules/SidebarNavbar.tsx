"use client";

import styled from "styled-components";
import { NavbarLinks, UserDetails } from "$/lib/components";

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
  background-color: var(--card-background);

  display: flex;
  flex-direction: column;
  align-items: center;
`;
