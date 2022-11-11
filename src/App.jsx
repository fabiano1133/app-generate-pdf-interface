import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "../src/components/Home/home";
import Form from "../src/components/Form/Form.jsx";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/form" element={<Form />} />
      </Routes>
      <Footer />
    </>
  );
}
