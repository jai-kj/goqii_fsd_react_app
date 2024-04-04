import { forwardRef } from "react";

interface IBottomSheetProviderProps {
  children: React.ReactNode;
  show: boolean;
}

const BottomSheetProvider = forwardRef(
  (
    { children, ...bottomSheetProps }: IBottomSheetProviderProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div
        className={`bg-black/50 w-full h-full fixed inset-0 z-50 transition-all duration-300 ease-in-out
      ${bottomSheetProps.show ? "opacity-100 visible" : "opacity-0 invisible"}
    `}
      >
        <div className="fixed inset-0 flex items-end justify-center">
          <div
            className={`
    bg-slate-600 p-4 w-full max-w-md rounded-t-xl
      transition-all duration-300 ease-in-out scroll-smooth
      ${
        bottomSheetProps.show
          ? "opacity-100 visible delay-300"
          : "translate-y-[100%] opacity-0 invisible"
      }`}
            ref={ref}
          >
            {children}
          </div>
        </div>
      </div>
    );
  }
);

export default BottomSheetProvider;
