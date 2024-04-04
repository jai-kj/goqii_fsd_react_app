interface ITextInput extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder: string;
  postIcon?: React.ReactNode;
}

const TextInput = ({ name, placeholder, postIcon, ...rest }: ITextInput) => {
  return (
    <div className="flex w-full items-center border-b border-gray-300">
      <input
        type="text"
        name={name}
        title={name}
        placeholder={placeholder}
        {...rest}
      />
      {postIcon}
    </div>
  );
};

export default TextInput;
