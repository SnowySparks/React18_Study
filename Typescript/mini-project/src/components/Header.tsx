import "./Header.css";

interface HeaderInterFace {
  title: string;
  leftChild?: JSX.Element;
  rightChild?: JSX.Element;
}

const Header = ({ title, leftChild, rightChild }: HeaderInterFace) => {
  return (
    <header className="Header">
      <div className="header_left">{leftChild}</div>
      <div className="header_center">{title}</div>
      <div className="header_right">{rightChild}</div>
    </header>
  );
};

export default Header;
