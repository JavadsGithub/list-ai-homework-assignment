import { useCallback } from "react";
import {
  closePlayingItem,
  Item,
  setPlayingItem,
  setPlayMode,
  useAppDispatch,
  useAppSelector,
} from "../redux";

export function usePlayer() {
  const dispatch = useAppDispatch();

  const { playMode, playingItem } = useAppSelector((state) => ({
    playMode: state.layout.playMode,
    playingItem: state.layout.playingItem,
  }));

  const playItem = useCallback(
    (item: Item) => {
      dispatch(setPlayingItem({ item }));
    },
    [dispatch]
  );

  const maximizePlayer = useCallback(() => {
    dispatch(setPlayMode({ mode: "drawer" }));
  }, [dispatch]);

  const minimizePlayer = useCallback(() => {
    dispatch(setPlayMode({ mode: "float" }));
  }, [dispatch]);

  const closePlayer = useCallback(() => {
    dispatch(closePlayingItem());
  }, [dispatch]);

  return {
    playItem,
    playMode,
    playingItem,
    maximizePlayer,
    minimizePlayer,
    closePlayer,
  };
}
