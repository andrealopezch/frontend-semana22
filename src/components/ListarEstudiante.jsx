import React from "react";

const ListarEstudiante = ({
  students,
  deleteStudent,
  updateForm,
  updateStudent,
}) => {
  return (
    <div>
      <h3>Listado de Estudiantes</h3>
      {students.map((student) => (
        <div key={student.id}>
          <button onClick={() => deleteStudent(student.id)}>Eliminar</button>
          <button
            onClick={() => updateForm(student.id, student.name, student.age)}
          >
            Actualizar
          </button>
          {student.name} - Edad: {student.age}
        </div>
      ))}
    </div>
  );
};

export default ListarEstudiante;
