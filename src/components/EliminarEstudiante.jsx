import React from "react";
import axios from "axios";

const EliminarEstudiante = ({ studentId, onDelete }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:4000/students/${studentId}`);
      onDelete(studentId);
      alert("Estudiante eliminado exitosamente");
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  return <button onClick={handleDelete}>Eliminar</button>;
};

export default EliminarEstudiante;
