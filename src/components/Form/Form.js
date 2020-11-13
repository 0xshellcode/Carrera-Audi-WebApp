import React from "react";
import Contact from "./components/Contact";
import Header from './Header';
import "./Form.css";
import '../../App.css';

function Form() {
  return (
    <div className="main-form">
      <Header />
      <Contact />
    </div>
  );
}

export default Form;
