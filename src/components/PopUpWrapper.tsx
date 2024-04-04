import { useMemo } from "react";
import { useEscapeOutsideHandler } from "../hooks/useEscapeOutsideHandler";
import { SCREENS_WITH_BOTTOM_SHEET, useScreen } from "../hooks/useScreen";
import BottomSheetProvider from "./layout/BottomSheetProvider";
import ModalProvider from "./layout/ModalProvider";

interface IPopUpWrapperProps {
  children: React.ReactNode;
  show: boolean;
  handleClose: () => void;
  wantBottomSheet?: boolean;
}

const PopUpWrapper = ({ children, ...popUpProps }: IPopUpWrapperProps) => {
  const { show, handleClose, wantBottomSheet = true } = popUpProps;
  const { ref } = useEscapeOutsideHandler({ callback: handleClose });

  const { currentSize } = useScreen({ activated: show });

  const forSmallScreens = useMemo(
    () => currentSize && SCREENS_WITH_BOTTOM_SHEET.includes(currentSize),
    [currentSize]
  );

  return wantBottomSheet && forSmallScreens ? (
    <BottomSheetProvider show={show} ref={ref}>
      {children}
    </BottomSheetProvider>
  ) : (
    <ModalProvider show={show} ref={ref}>
      {children}
    </ModalProvider>
  );
};

export default PopUpWrapper;
