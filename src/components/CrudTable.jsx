import { CrudTableRow } from "./CrudTableRow";
import { useState } from "react";
import "../styles/Components.css";
import "../styles/App.css";

export const CrudTable = ({ data, setDataToEdit, deleteData, dataToEdit }) => {
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const safeData = Array.isArray(data) ? data : [];

  const filteredData = safeData.filter((el) =>
    el.pokemon_name.toLowerCase().includes(filter.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <div className="crud-table-container">
        <h2 className="panel-header">BASE DE DATOS</h2>
      <div className="table-header-tools">

        <div className="search-container">
          <input
            type="text"
            className="table-search-input"
            placeholder="FILTRAR POR NOMBRE..."
            value={filter}
            onChange={(e) => {
              setFilter(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>
      </div>

      <div className="table-responsive">
        <table className="pokedex-table">
          <thead>
            <tr>
              <th>NOMBRE</th>
              <th>TIPOS</th>
              <th>UBICACIÓN</th>
              <th>RAREZA</th>
              <th>FELICIDAD BASE</th>
              <th>ACCIONES</th>
            </tr>
          </thead>
          <tbody>
            {currentData.length > 0 ? (
              currentData.map((el) => (
                <CrudTableRow
                  key={el.pokemon_id}
                  el={el}
                  setDataToEdit={setDataToEdit}
                  deleteData={deleteData}
                  isEditing={dataToEdit && dataToEdit.pokemon_id === el.pokemon_id}
                />
              ))
            ) : (
              <tr>
                <td colSpan="6" className="no-data">
                  <span className="blink-text">▶</span> NO SE DETECTAN REGISTROS
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="pokedex-pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={currentPage === i + 1 ? "active" : ""}
            >
              {String(i + 1).padStart(2, "0")}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
