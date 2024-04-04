interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ ...rest }: IButton) => {
  return <button {...rest} />;
};

export default Button;
