import React, { useEffect } from "react";

type useDetectOutsideClickHookType = (
  ref: React.RefObject<HTMLElement>,
  action: () => void
) => void;

export const useDetectOutsideClick: useDetectOutsideClickHookType = (
  ref,
  action
) => {
  useEffect(() => {
    const listener = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        action();
      }
    };

    window.addEventListener("mousedown", listener);
    return () => {
      window.removeEventListener("mousedown", listener);
    };
  }, [ref, action]);
};
