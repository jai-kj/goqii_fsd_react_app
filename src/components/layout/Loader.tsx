import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const Loader = ({ className }: { className?: ClassValue }) => {
  return (
    <div
      className={twMerge(
        clsx(
          "border-gray-300 h-10 w-10 animate-spin rounded-full border-4 border-t-orange-600",
          className
        )
      )}
    />
  );
};

export default Loader;
