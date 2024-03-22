import React from "react";

const ActualizarEstudiante = ({
  studentId,
  updatedStudentName,
  setUpdatedStudentName,
  updatedStudentAge,
  setUpdatedStudentAge,
  updateStudent,
}) => {
  const submit = async (e) => {
    e.preventDefault();
    try {
      await updateStudent(studentId, updatedStudentName, updatedStudentAge);
      alert("Estudiante actualizado exitosamente");
    } catch (error) {
      console.error("Error updating student:", error);
    }
  };

  return (
    <div className="container">
      <hr></hr>
      <h2>Actualizar Estudiante</h2>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="updatedName" className="form-label">
            Nombre:
          </label>
          <input
            type="text"
            className="form-control"
            id="updatedName"
            value={updatedStudentName}
            onChange={(e) => setUpdatedStudentName(e.target.value)}
            placeholder="Ingrese el nuevo nombre del estudiante"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="updatedAge" className="form-label">
            Edad:
          </label>
          <input
            type="number"
            className="form-control"
            id="updatedAge"
            value={updatedStudentAge}
            onChange={(e) => setUpdatedStudentAge(e.target.value)}
            placeholder="Ingrese la nueva edad del estudiante"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mb-5">
          Actualizar Estudiante
        </button>
      </form>
    </div>
  );
};

export default ActualizarEstudiante;
