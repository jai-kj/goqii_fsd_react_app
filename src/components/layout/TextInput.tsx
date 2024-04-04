import { twMerge } from "tailwind-merge";
import { IUseTextInputHook } from "../../hooks/useInput";
import clsx, { ClassValue } from "clsx";

interface ITextInput extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder: string;
  parentClassNames?: ClassValue;
  postIcon?: React.ReactNode;
  errorMessage?: string;
  inputHook: IUseTextInputHook;
}

const TextInput = ({
  name,
  placeholder,
  postIcon,
  parentClassNames,
  inputHook,
  errorMessage,
  ...rest
}: ITextInput) => {
  return (
    <>
      <div
        className={twMerge(
          clsx(
            "flex w-full items-center border-b border-gray-300",
            parentClassNames
          )
        )}
      >
        <input
          type="text"
          name={name}
          title={name}
          className={twMerge(
            clsx(
              "h-10 bg-transparent w-full px-2 outline-none disabled:bg-transparent disabled:cursor-not-allowed",
              rest.className
            )
          )}
          placeholder={placeholder}
          {...inputHook.bind}
          {...rest}
        />
        {postIcon}
      </div>
      {errorMessage && (
        <p className="text-red-300 -my-4 h-5 text-sm px-2">
          {(inputHook.error === "true" && errorMessage) ?? ""}
        </p>
      )}
    </>
  );
};

export default TextInput;
