import React from "react";
import "../pages/Home.css";

function StudentRow({ student }) {
  function handleClick() {
    console.log(student.id);
  }
  return (
    <div className="row" onClick={handleClick}>
      <div style={{ width: "50%" }}>{student.name}</div>
      <div style={{ width: "25%" }}>{student.homeworks.length}</div>
      <div style={{ width: "25%" }}>
        {student.homeworks.length > 0
          ? parseInt(
              student.homeworks.reduce((s, h) => s + h.score, 0) /
                student.homeworks.length
            )
          : "-"}
      </div>
    </div>
  );
}

export default StudentRow;
