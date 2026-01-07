import React from "react";
import Borrar from "../icons/borrar.png"
import Editar from "../icons/editar-informacion.png"
import "../styles/App.css";
import "../styles/components.css";

export const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  let {
    pokemon_id,
    pokemon_name,
    types,
    location,
    rarity_name,
    initial_happiness,
  } = el;

  return (
    <tr className="table-row-retro">
      <td className="bold-name">{pokemon_name}</td>
      <td>
        <span className="type-badge">{types || "---"}</span>
      </td>
      <td className="italic-text">{location || "Desconocida"}</td>
      <td>
        <span className={`rarity-tag ${rarity_name?.toLowerCase()}`}>
          {rarity_name}
        </span>
      </td>
      <td>{initial_happiness}%</td>
      <td className="actions-cell">
        <button className="btn-table-edit" onClick={() => setDataToEdit(el)}>
          <img src={Editar} />
        </button>
        <button
          className="btn-table-delete"
          onClick={() => deleteData(pokemon_id)}
        >
          <img src={Borrar}/>
        </button>
      </td>
    </tr>
  );
};
