import React, { useState, useEffect } from "react";
import "../Form.css";
import { db } from "../firebase";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [curp, setCurp] = useState("");
  const [celular, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [ingles, setIngles] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        curp: curp,
        celular: celular,
        message: message,
        ingles: ingles,
      })
      .then(() => {
        setLoader(false);
        alert("Tú mensaje ha sido enviado con exito");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setCurp("");
    setPhone("");
    setIngles("");
    setMessage("");

  };

  return (
    <form className="form" onSubmit={handleSubmit}>

      <label>Nombre</label>
      <input
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Email</label>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Celular</label>
      <input
        placeholder="Celular"
        value={celular}
        onChange={(e) => setPhone(e.target.value)}
      />

      <label>CURP</label>
      <input
        placeholder="Curp"
        value={curp}
        onChange={(e) => setCurp(e.target.value)}
      />

      <label>Nivel de Inglés</label>
      <input
        placeholder="Nivel de Inglés"
        value={ingles}
        onChange={(e) => setIngles(e.target.value)}
      />

      <label>Mensaje</label>
      <textarea
        placeholder="Mensaje"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button
        type="submit"
        style={{ background: loader ? "#ccc" : " rgb(245, 55, 5)" }}
      >
        Submit
      </button>
    </form>
  );
};

export default Contact;
