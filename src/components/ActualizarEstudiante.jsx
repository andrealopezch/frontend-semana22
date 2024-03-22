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
    <div>
      <h2>Actualizar Estudiante</h2>
      <form onSubmit={submit}>
        <input
          type="text"
          value={updatedStudentName}
          onChange={(e) => setUpdatedStudentName(e.target.value)}
          placeholder="Ingrese el nuevo nombre del estudiante"
          required
        />
        <input
          type="number"
          value={updatedStudentAge}
          onChange={(e) => setUpdatedStudentAge(e.target.value)}
          placeholder="Ingrese la nueva edad del estudiante"
          required
        />
        <button type="submit">Actualizar Estudiante</button>
      </form>
    </div>
  );
};

export default ActualizarEstudiante;
