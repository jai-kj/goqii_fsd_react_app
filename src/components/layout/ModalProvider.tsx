import { forwardRef } from "react";

interface IModalProviderProps {
  children: React.ReactNode;
  show: boolean;
}

const ModalProvider = forwardRef(
  (
    { children, ...modalProps }: IModalProviderProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div
        className={`bg-black/50 w-full h-full fixed inset-0 z-50 transition-all duration-300 ease-in-out
      ${modalProps.show ? "opacity-100 visible" : "opacity-0 invisible"}
    `}
      >
        <div
          ref={ref}
          className={`
        fixed bg-slate-600 rounded-2xl p-5 top-1/2 left-1/2 
        w-[calc(100%-3rem)] md:w-[36rem] overflow-y-auto no-scrollbar
        -translate-x-1/2 transition-all duration-300 ease-in-out scroll-smooth 
        ${
          modalProps.show
            ? "-translate-y-1/2 opacity-100 visible delay-300"
            : "-translate-y-[500%] opacity-0 invisible"
        }`}
        >
          {children}
        </div>
      </div>
    );
  }
);

export default ModalProvider;
