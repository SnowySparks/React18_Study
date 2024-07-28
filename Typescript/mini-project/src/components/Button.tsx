import "@components/Button.css";

interface ButtonProps {
  text: string;
  type?: "POSITIVE" | "NEGATIVE";
  onClick?(): void;
}

const Button = ({ text, type, onClick }: ButtonProps) => {
  return (
    <button className={`Button Button_${type}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
