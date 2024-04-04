import { useEffect, useState } from "react";

enum SCREEN_BREAKPOINTS {
  X_SMALL = "xs",
  SMALL = "sm",
  MEDIUM = "md",
  LARGE = "lg",
  X_LARGE = "xl",
}

const BREAKPOINTS = Object.freeze({
  [SCREEN_BREAKPOINTS.X_LARGE]: 1280,
  [SCREEN_BREAKPOINTS.LARGE]: 1024,
  [SCREEN_BREAKPOINTS.MEDIUM]: 768,
  [SCREEN_BREAKPOINTS.SMALL]: 640,
  [SCREEN_BREAKPOINTS.X_SMALL]: 320,
});

export const SCREENS_WITH_BOTTOM_SHEET = [
  SCREEN_BREAKPOINTS.X_SMALL,
  SCREEN_BREAKPOINTS.SMALL,
];

export const useScreen = ({ activated }: { activated: boolean }) => {
  const [currentSize, setCurrentSize] = useState<SCREEN_BREAKPOINTS>();

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width >= BREAKPOINTS[SCREEN_BREAKPOINTS.X_LARGE])
        setCurrentSize(SCREEN_BREAKPOINTS.X_LARGE);
      else if (width >= BREAKPOINTS[SCREEN_BREAKPOINTS.LARGE])
        setCurrentSize(SCREEN_BREAKPOINTS.LARGE);
      else if (width >= BREAKPOINTS[SCREEN_BREAKPOINTS.MEDIUM])
        setCurrentSize(SCREEN_BREAKPOINTS.MEDIUM);
      else if (width >= BREAKPOINTS[SCREEN_BREAKPOINTS.SMALL])
        setCurrentSize(SCREEN_BREAKPOINTS.SMALL);
      else if (width >= BREAKPOINTS[SCREEN_BREAKPOINTS.X_SMALL])
        setCurrentSize(SCREEN_BREAKPOINTS.X_SMALL);
    };

    if (activated) handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activated]);

  return { currentSize };
};
