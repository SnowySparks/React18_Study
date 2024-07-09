const Button = ({ text, color = "black", children }) => {
  const btnClick = (e) => {
    console.log(e);
    // console.log(text);
  };
  return (
    <button
      // onMouseEnter={btnClick}
      onClick={btnClick}
      style={{ color }}
    >
      {text} - {color}
      {children}
    </button>
  );
};

export default Button;
