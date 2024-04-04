import { useCallback, useState } from "react";

type ErrorState = "true" | "false" | "";

interface IUseTextInputProps {
  initialState?: string;
  regex?: RegExp;
  regexCheck?: boolean;
  errorState?: ErrorState;
  handleOnChange?: (arg?: string) => void;
}

export interface IUseTextInputHook {
  value: string;
  error: ErrorState;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onUpdate: (val?: string, err?: ErrorState) => void;
  bind: {
    value: string;
    error: ErrorState;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
}

export const useTextInput = ({
  initialState = "",
  errorState = "",
  regex = /./,
  regexCheck = false,
  handleOnChange,
}: IUseTextInputProps): IUseTextInputHook => {
  const [value, setValue] = useState<string>(initialState);
  const [error, setError] = useState<ErrorState>(errorState);

  const onUpdate = useCallback((val = "", err: ErrorState = "") => {
    setValue(val);
    setError(err);
  }, []);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      if (e.target.value === "") setError("");
      else {
        if (e.target.value?.trim() === "") setError("true");
        else if (regexCheck && regex && regex.test(e.target.value)) {
          setError("false");
          if (handleOnChange) handleOnChange(e.target.value?.trim());
        } else if (regexCheck) setError("true");
        else if (handleOnChange) handleOnChange(e.target.value?.trim());
      }
    },
    [regex, regexCheck, handleOnChange]
  );

  return {
    value,
    error,
    onChange,
    onUpdate,
    bind: {
      value,
      error,
      onChange,
    },
  };
};
