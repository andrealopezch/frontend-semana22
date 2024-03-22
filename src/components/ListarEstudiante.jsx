import React from "react";

const ListarEstudiante = ({
  students,
  deleteStudent,
  updateForm,
  updateStudent,
}) => {
  return (
    <div className="container">
      <hr></hr>
      <h3 className="mb-3">Listado de Estudiantes</h3>
      {students.map((student) => (
        <div className="mb-3" key={student.id}>
          <div className="d-flex justify-content-between">
            <div>
              <button
                onClick={() => deleteStudent(student.id)}
                className="btn btn-danger me-2"
              >
                Eliminar
              </button>
              <button
                onClick={() =>
                  updateForm(student.id, student.name, student.age)
                }
                className="btn btn-primary"
              >
                Actualizar
              </button>
            </div>
            <div className="col mt-2" style={{ marginLeft: "20px" }}>
              {student.name} - Edad: {student.age}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListarEstudiante;
