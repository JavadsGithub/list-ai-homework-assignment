"use client";

import { SIDE_NAVBAR } from "$/lib/constants";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback } from "react";
import styled from "styled-components";

export function NavbarLinks() {
  const pathname = usePathname();

  const isButtonAction = useCallback(
    (href: string) =>
      href == ""
        ? // filtering unimplemented paths
          false
        : pathname.includes(href),
    []
  );

  return (
    <$>
      {SIDE_NAVBAR.map(($link) => (
        <Link key={$link.id} href={$link.href}>
          <Button
            variant={isButtonAction($link.href) ? "solid" : "light"}
            radius="sm"
            className="w-full text-medium flex px-3 h-10"
          >
            <div className="w-full flex items-center gap-1">
              {$link.icon}

              <span>{$link.title}</span>
            </div>
          </Button>
        </Link>
      ))}
    </$>
  );
}

const $ = styled.div`
  width: 100%;
  padding: 0 6px 16px 6px;

  display: flex;
  flex-direction: column;
`;
