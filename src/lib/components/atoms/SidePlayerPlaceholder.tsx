"use client";

import { selectPlayMode, useAppSelector } from "$/lib/redux";
import { motion } from "framer-motion";
import { useMemo } from "react";

const frames = {
  minWidth: {
    idle: "0px",
    appear: ["0px", "380px", "366px"],
    disappear: ["366px", "380px", "0px"],
  },
};

export function SidePlayerPlaceholder() {
  const playMode = useAppSelector(selectPlayMode);

  // >>>------------ Animation Props
  const animation = useMemo(
    () => ({
      minWidth:
        playMode == null
          ? frames.minWidth.idle
          : playMode == "drawer"
          ? frames.minWidth.appear
          : frames.minWidth.disappear,
    }),
    [playMode]
  );
  const transition = useMemo(
    () => ({
      duration: 0.15,
      delay: 0.15,
      ease: "easeIn",
    }),
    []
  );
  const initial = useMemo(() => ({ minWidth: "0px" }), []);
  // Animation Props ------------<<<

  return (
    <motion.div animate={animation} transition={transition} initial={initial} />
  );
}
