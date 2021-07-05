import React from "react";
import "../pages/Home.css";

function StudentRow({ student }) {
  return (
    <div className="row">
      <div>{student.name}</div>
      <div>{student.homeworks.length}</div>
      <div>
        {student.homeworks.length > 0
          ? student.homeworks.reduce((s, h) => s + h.score, 0)
          : "-"}
      </div>
    </div>
  );
}

export default StudentRow;
