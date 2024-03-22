import React from "react";

const AgregarEstudiante = ({
  newStudentName,
  setNewStudentName,
  newStudentAge,
  setNewStudentAge,
  addStudent,
}) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    addStudent();
  };

  return (
    <div className="container">
      <hr></hr>
      <h3 className="mb-3">Agregar Estudiante</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="newName" className="form-label">
            Nombre:
          </label>
          <input
            type="text"
            className="form-control"
            id="newName"
            value={newStudentName}
            onChange={(e) => setNewStudentName(e.target.value)}
            placeholder="Ingrese el nombre del estudiante"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="newAge" className="form-label">
            Edad:
          </label>
          <input
            type="number"
            className="form-control"
            id="newAge"
            value={newStudentAge}
            onChange={(e) => setNewStudentAge(e.target.value)}
            placeholder="Ingrese la edad del estudiante"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Agregar Estudiante
        </button>
      </form>
    </div>
  );
};

export default AgregarEstudiante;
