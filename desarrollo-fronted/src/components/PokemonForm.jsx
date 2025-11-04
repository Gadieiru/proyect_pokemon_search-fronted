import React, { useState } from "react";

const initialForm = {
  Pokemon: "",
  Type: "",
};

export const PokemonForm = ({ handleSearch }) => {
  const [form, setForm] = useState(initialForm);

  // Controla el formulario
  const handleChange = (e) => {
    setForm({
      ...form,
      // Objeto que origina el evento :e.target:
      [e.target.name]: e.target.value, //Su valor sera igual a lo que haya en :e.target.value:
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.Pokemon) {
      alert("Datos incompletos");
      return;
    }
    handleSearch(form);
    setForm(initialForm);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="Pokemon"
          placeholder="Nombre del pokemon"
          onChange={handleChange}
          value={form.Pokemon}
        />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};
