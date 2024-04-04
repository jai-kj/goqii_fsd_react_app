import { useEffect, useState } from "react";
import { useUIState } from "../../context/context";

const Alert = () => {
  const [show, setShow] = useState(false);
  const { alertMessage } = useUIState();

  useEffect(() => {
    setShow(alertMessage ? true : false);
    return () => setShow(false);
  }, [alertMessage]);

  return (
    <div
      className={`w-full flex justify-center items-center z-40 alert ${
        show ? "alert-show" : "alert-hide"
      }`}
    >
      {show ? (
        <p className="mx-6 leading-6 bg-[#1A1A1A] text-white font-medium py-2 px-4 text-center rounded-lg box-shadow text-rg md:px-6 md:text-sm md:mx-0 md:max-w-xl text-balance">
          {alertMessage}
        </p>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Alert;
