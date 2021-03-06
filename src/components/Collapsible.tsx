import classNames from "classnames";
import * as React from "react";

import { Icon } from "./Icon";

interface Props {
  title: string;

  children: React.ReactNode;
}

export function Collapsible({ title, children }: Props): JSX.Element {
  const contentRef = React.useRef<HTMLDivElement>(null);
  const [open, setOpen] = React.useState(false);
  const [maxHeight, setMaxHeight] = React.useState(0);

  React.useEffect(() => {
    if (contentRef.current != null) {
      setMaxHeight(contentRef.current.scrollHeight);
    }
  }, [contentRef, setMaxHeight, children]);

  return (
    <div className="w-full overflow-hidden">
      <div
        data-testid="expand-click-target"
        className="flex items-center cursor-pointer hover:text-blue-700 py-3"
        onClick={() => setOpen(!open)}
      >
        <span className="text-sm text-neutral-600 pl-2">{title}</span>
        <div
          className={classNames(
            "flex-center transition-transform duration-200 ml-auto",
            {
              "transform rotate-90": open,
            }
          )}
        >
          <div className="w-4">
            <Icon icon="caret-right" />
          </div>
        </div>
      </div>
      <div
        data-testid="expand-content"
        ref={contentRef}
        style={{ maxHeight: open ? `${maxHeight}px` : "0" }}
        className="transition-max-height origin-top duration-200 ease-in-out overflow-hidden pl-2"
      >
        {children}
      </div>
    </div>
  );
}
