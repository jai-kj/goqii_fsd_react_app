import { useCallback, useState } from "react";

export const useShow = ({
  defaultState = false,
}: {
  defaultState?: boolean;
}) => {
  const [show, setShow] = useState<boolean>(defaultState);

  const handleOpen = useCallback(() => setShow(true), []);
  const handleClose = useCallback(() => setShow(false), []);

  return { visible: show, handleOpen, handleClose };
};
