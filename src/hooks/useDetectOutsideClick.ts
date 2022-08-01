import React, { useEffect } from "react";

type useDetectOutsideClickHookType = (
  ref: React.RefObject<HTMLElement>,
  action: () => void,
  excludedElements?: HTMLCollectionOf<Element> | NodeListOf<Element>
) => void;

export const useDetectOutsideClick: useDetectOutsideClickHookType = (
  ref,
  action,
  excludedElements
) => {
  useEffect(() => {
    const listener = (e: MouseEvent) => {
      if (excludedElements) {
        const excludedElementsArray =
          Array.prototype.slice.call(excludedElements);
        const isTargetOnExcludedElement = excludedElementsArray?.some(
          (element: Element) => element.contains(e.target as Node)
        );
        if (
          ref.current &&
          !ref.current.contains(e.target as Node) &&
          !isTargetOnExcludedElement
        ) {
          action();
        }
      }
      if (!excludedElements) {
        if (ref.current && !ref.current.contains(e.target as Node)) {
          action();
        }
      }
    };

    window.addEventListener("mousedown", listener);
    return () => {
      window.removeEventListener("mousedown", listener);
    };
  }, [ref, action, excludedElements]);
};
