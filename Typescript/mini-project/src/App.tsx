import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";
import Header from "./components/Header";
import Button from "./components/Button";

function App() {
  return (
    <>
      <Header
        title={"1234"}
        leftChild={<Button text="123" />}
        rightChild={<Button text="123132" />}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="*" element={<div>잘못된 접근</div>} />
      </Routes>
    </>
  );
}

export default App;
