import React from "react";
import AddNewStudent from "../components/AddNewStudent";
import StudentRow from "../components/StudentRow";
import "./Home.css";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import actions from "../actions";

function Home() {
  const students = useSelector((state) => state.students);
  const dispatch = useDispatch();

  return (
    <div className="list">
      <button
        className="myButton"
        onClick={() => dispatch({ type: actions.SWITCHMODALVISIBILITY })}
      >
        &#x271A;
      </button>
      <AddNewStudent />
      <div className="header">
        <div style={{ width: "50%" }}>NAME</div>
        <div style={{ width: "25%" }}>Amount of Homework</div>
        <div style={{ width: "25%" }}>Total Avarage Score</div>
      </div>
      {students.reverse().map((student, index) => (
        <Link
          key={student.id}
          to={`/AddWork/${student.id}`}
          style={{ textDecoration: "none" }}
        >
          <StudentRow key={student.id} student={student} />
        </Link>
      ))}
    </div>
  );
}

export default Home;
