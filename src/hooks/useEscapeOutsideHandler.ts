import { useEffect, useRef } from "react";

export const useEscapeOutsideHandler = ({
  callback,
}: {
  callback: () => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node))
        callback();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (ref.current && event.key === "Escape") callback();
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [ref, callback]);

  return {
    ref,
  };
};
