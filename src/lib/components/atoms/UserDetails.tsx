"use client";

import { useGetMe } from "$/lib/api/controllers/auth/get-me";
import { useLogout } from "$/lib/hooks";
import { Skeleton, Tooltip } from "@nextui-org/react";
import { IconUserCircle } from "@tabler/icons-react";
import { useMemo } from "react";
import styled from "styled-components";

export function UserDetails() {
  // >>>------------ Get User Details
  const getMeQuery = useGetMe();

  const userFullName = useMemo(() => {
    return `${getMeQuery.data?.firstName ?? ""} ${
      getMeQuery.data?.lastName ?? ""
    }`;
  }, [getMeQuery.data]);
  // Get User Details ------------<<<

  const logout = useLogout();

  return (
    <$>
      {getMeQuery.isLoading ? (
        <Skeleton className="h-8 w-full rounded-lg" />
      ) : (
        <>
          <Tooltip
            content="Click to Logout"
            color="danger"
            className="capitalize"
          >
            <IconUserCircle
              size={32}
              className="cursor-pointer"
              onClick={logout}
            />
          </Tooltip>

          <h3>{userFullName}</h3>
        </>
      )}
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
