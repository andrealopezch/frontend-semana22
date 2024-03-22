import React, { useState, useEffect } from "react";
import ListarEstudiante from "./components/ListarEstudiante";
import AgregarEstudiante from "./components/AgregarEstudiante";
import ActualizarEstudiante from "./components/ActualizarEstudiante";
import axios from "axios";

const App = () => {
  const [students, setStudents] = useState([]);
  const [newStudentName, setNewStudentName] = useState("");
  const [newStudentAge, setNewStudentAge] = useState("");
  const [updatedStudentName, setUpdatedStudentName] = useState("");
  const [updatedStudentAge, setUpdatedStudentAge] = useState("");
  const [updatingStudentId, setUpdatingStudentId] = useState(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://localhost:4000/students");
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const addStudent = async () => {
    try {
      await axios.post("http://localhost:4000/students", {
        name: newStudentName,
        age: newStudentAge,
      });
      setNewStudentName("");
      setNewStudentAge("");
      fetchStudents();
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  const deleteStudent = async (studentId) => {
    try {
      await axios.delete(`http://localhost:4000/students/${studentId}`);
      fetchStudents();
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  const updateForm = (studentId, currentName, currentAge) => {
    setUpdatingStudentId(studentId);
    setUpdatedStudentName(currentName);
    setUpdatedStudentAge(currentAge);
  };

  const updateStudent = async (studentId, updatedName, updatedAge) => {
    try {
      await axios.patch(`http://localhost:4000/students/${studentId}`, {
        name: updatedName,
        age: updatedAge,
      });
      setUpdatingStudentId(null);
      fetchStudents();
    } catch (error) {
      console.error("Error updating student:", error);
    }
  };

  return (
    <div className="mt-3">
      <h2 className="text-center">CRUD Estudiantes</h2>
      <AgregarEstudiante
        newStudentName={newStudentName}
        setNewStudentName={setNewStudentName}
        newStudentAge={newStudentAge}
        setNewStudentAge={setNewStudentAge}
        addStudent={addStudent}
      />
      <ListarEstudiante
        students={students}
        deleteStudent={deleteStudent}
        updateForm={updateForm}
        updateStudent={updateStudent}
      />
      {updatingStudentId && (
        <ActualizarEstudiante
          studentId={updatingStudentId}
          updatedStudentName={updatedStudentName}
          setUpdatedStudentName={setUpdatedStudentName}
          updatedStudentAge={updatedStudentAge}
          setUpdatedStudentAge={setUpdatedStudentAge}
          updateStudent={updateStudent}
        />
      )}
    </div>
  );
};

export default App;
