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
    <div>
      <h3>Agregar Estudiante</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newStudentName}
          onChange={(e) => setNewStudentName(e.target.value)}
          placeholder="Ingrese el nombre del estudiante"
          required
        />
        <input
          type="number"
          value={newStudentAge}
          onChange={(e) => setNewStudentAge(e.target.value)}
          placeholder="Ingrese la edad del estudiante"
          required
        />
        <button type="submit">Agregar Estudiante</button>
      </form>
    </div>
  );
};

export default AgregarEstudiante;
