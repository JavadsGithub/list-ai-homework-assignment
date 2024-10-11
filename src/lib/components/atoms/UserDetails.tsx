"use client";

import { useLogout } from "$/lib/hooks";
import { getUserData } from "$/lib/utils";
import { Tooltip } from "@nextui-org/react";
import { IconUserCircle } from "@tabler/icons-react";
import { useMemo, useState } from "react";
import styled from "styled-components";

export function UserDetails() {
  const [userName] = useState(getUserData());
  const fullName = useMemo(
    () => `${userName?.firstName ?? ""} ${userName?.lastName ?? ""}`,
    [userName]
  );

  const logout = useLogout();

  return (
    <$>
      <Tooltip content="Click to Logout" color="danger" className="capitalize">
        <IconUserCircle size={32} className="cursor-pointer" onClick={logout} />
      </Tooltip>
      <h3>{fullName}</h3>
    </$>
  );
}

const $ = styled.div`
  width: calc(100% - 28px);
  height: 72px;
  padding-bottom: 24px;
  padding-top: 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 10px;

  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 500;
`;
