import classNames from "classnames";
import React from "react";

interface Props {
  position?: "left" | "right";
  overlay?: boolean;
  children: React.ReactNode;
}

export function Panel({
  children,
  position = "left",
  overlay,
}: Props): JSX.Element {
  return (
    <div
      className={classNames("relative", {
        ["ml-auto"]: position === "right",
        ["w-0 flex-shrink-0 overflow-visible"]: !!overlay,
      })}
    >
      <div
        className={classNames(
          "w-80 h-full overflow-visible z-overlay bg-white",
          {
            ["right-0"]: position === "right",
            ["absolute"]: !!overlay,
          }
        )}
      >
        <div
          className={classNames("w-full h-full border-neutral-300 shadow", {
            ["border-r"]: position === "left",
            ["border-l"]: position === "right",
          })}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
