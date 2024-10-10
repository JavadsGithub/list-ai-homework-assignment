"use client";

import { selectPlayMode, useAppSelector } from "$/lib/redux";
import { motion } from "framer-motion";
import { useMemo } from "react";

export function SidePlayerPlaceholder() {
  const playMode = useAppSelector(selectPlayMode);
  const animation = useMemo(
    () =>
      playMode == null
        ? "0px"
        : playMode == "drawer"
        ? ["0px", "380px", "366px"]
        : ["366px", "380px", "0px"],
    [playMode]
  );

  return (
    <motion.div
      animate={{
        minWidth: animation,
      }}
      transition={{
        duration: 0.15,
        delay: 0.15,
        ease: "easeIn",
      }}
      initial={{ minWidth: "0px" }}
    />
  );
}
