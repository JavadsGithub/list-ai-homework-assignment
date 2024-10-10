import { Button, Slider } from "@nextui-org/react";
import { NextIcon } from "./NextIcon";
import { PauseCircleIcon } from "./PauseCircleIcon";
import { PreviousIcon } from "./PreviousIcon";
import { RepeatOneIcon } from "./RepeatOnceIcon";
import { ShuffleIcon } from "./ShuffleIcon";

export function PlayerHud() {
  return (
    <div className="flex flex-col items-center justify-center px-4">
      <div className="w-full flex flex-col mt-3 gap-1">
        <Slider
          aria-label="Music progress"
          classNames={{
            track: "bg-default-500/30",
            thumb: "w-2 h-2 after:w-2 after:h-2 after:bg-foreground",
          }}
          color="foreground"
          defaultValue={33}
          size="sm"
        />
        <div className="flex justify-between">
          <p className="text-small">1:23</p>
          <p className="text-small text-foreground/50">4:32</p>
        </div>
      </div>

      <div className="flex w-full items-center justify-center">
        <Button
          isIconOnly
          className="data-[hover]:bg-foreground/10"
          radius="full"
          variant="light"
        >
          <RepeatOneIcon className="text-foreground/80" />
        </Button>
        <Button
          isIconOnly
          className="data-[hover]:bg-foreground/10"
          radius="full"
          variant="light"
        >
          <PreviousIcon />
        </Button>
        <Button
          isIconOnly
          className="w-auto h-auto data-[hover]:bg-foreground/10"
          radius="full"
          variant="light"
        >
          <PauseCircleIcon size={54} />
        </Button>
        <Button
          isIconOnly
          className="data-[hover]:bg-foreground/10"
          radius="full"
          variant="light"
        >
          <NextIcon />
        </Button>
        <Button
          isIconOnly
          className="data-[hover]:bg-foreground/10"
          radius="full"
          variant="light"
        >
          <ShuffleIcon className="text-foreground/80" />
        </Button>
      </div>
    </div>
  );
}
