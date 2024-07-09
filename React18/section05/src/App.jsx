// App.jsx
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Button from "./components/Button";

function App() {
  const buttonProps = {
    text: "수박",
    color: "agua",
  };

  return (
    <>
      {/* <Header />
      <Main />
      <Footer /> */}
      <hr />

      <Button text="사과" />
      <Button text="바나나" color="red" />
      <Button text="망고" id={1234} />
      <Button {...buttonProps} />
      <Button text="자식요소있는버튼">
        <div>자식요소</div>
        <Header />
      </Button>
    </>
  );
}

export default App;
