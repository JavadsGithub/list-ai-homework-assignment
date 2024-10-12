import React, { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

export const useDragScroll = () => {
  // We will use React useRef hook to reference the wrapping div:
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  // Now we pass the reference to the useDraggable hook:
  const { events } = useDraggable(ref);

  return { ref, events };
};
