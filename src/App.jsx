import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import FormCaucao from "../src/components/Form-Caucao/Form-caucao.jsx";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import FormFiador from "./components/Form-Fiador/Form-fiador";
import { NotFound } from "./components/404/404";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/form-caucao" element={<FormCaucao />} />
        <Route path="/form-fiador" element={<FormFiador />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
