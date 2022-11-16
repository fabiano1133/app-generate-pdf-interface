import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Hm";
import FormCaucao from "../src/components/Form-Caucao/Form-caucao.jsx";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import FormFiador from "./components/Form-Fiador/Form-fiador";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/form-caucao" element={<FormCaucao />} />
        <Route path="/form-fiador" element={<FormFiador />} />
      </Routes>
      <Footer />
    </>
  );
}
